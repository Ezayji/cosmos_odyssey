const { quickSort, byFlightStart } = require('./quickSort');

// find next flight
const findNextFlight = (priceList, from, to, takeOff) => {
    let pathPrices;
    let distance = 0;
    let flight;
    
    // find the path from priceList
    for(let i = 0; i < priceList.length; i++){
        if (priceList[i].routeInfo.from.name === from && priceList[i].routeInfo.to.name === to){
            pathPrices = priceList[i].providers.slice(0, priceList[i].providers.length);
            distance = priceList[i].routeInfo.distance;
            break;
        };
    };
    
    // sort pathprices by flightStart
    quickSort(pathPrices, 0, pathPrices.length - 1, byFlightStart);
    
    // find the first path with greater or equal takeoff time
    for(let i = 0; i < pathPrices.length; i++){
        if (new Date(pathPrices[i].flightStart).valueOf() > takeOff){
            flight = pathPrices[i];
            break;
        };
    };
    
    if(!flight) return false;
    flight.from = from;
    flight.to = to;
    flight.total_time = new Date(flight.flightEnd).valueOf() - new Date(flight.flightStart).valueOf();
    return [flight, distance];

};


const combineOption = (priceList, path, flightStart = 0) => {
    let takeOff = flightStart;
    const option = {
        price: 0,
        distance: 0,
        travelTime: 0,
        route: path,
        company_names: [],
        flights: [],
        start: 0,
        end: 0
    };

    for(let i = 0; i < path.length - 1; i++){
        
        const flight = findNextFlight(priceList, path[i], path[i + 1], takeOff);
        if(!flight) return false;

        // build up option object
        option.price += flight[0].price;
        option.distance += flight[1];
        // add total flight time
        option.travelTime += flight[0].total_time;
        //add current flight takeoff minus last flight landing to travel time
        if(i > 0) option.travelTime += (new Date(flight[0].flightStart).valueOf() - new Date(option.flights[option.flights.length - 1].flightEnd).valueOf());
        // add company name to list if it's not included
        if(!option.company_names.includes(flight[0].company.name)) option.company_names.push(flight[0].company.name);
        // add flight to option object
        option.flights.push(flight[0]);

        // set the takeoff time for next flight
        takeOff = new Date(flight[0].flightEnd).valueOf();


        if(i === 0) option.start = new Date(flight[0].flightStart).valueOf();
        if(i === path.length - 2) option.end = new Date(flight[0].flightEnd).valueOf();

    };

    return option;

};

const getOptionsForAllPaths = (priceList, paths) => {
    const options = [];

    for(const path of paths){
        let flightStart = 0;
        while(true){
            const option = combineOption(priceList, path, flightStart);
            if(!option) {
                break;
            };
            flightStart = option.start;
            options.push(option);
        };
    };

    return options;
};

// const flights = require('../../../exampleresponse.json');
// const { flightPaths, findAllPossiblePaths } = require('./flightPaths');

// const paths = findAllPossiblePaths(flightPaths, 'Earth', 'Mercury');
// const options = getOptionsForAllPaths(flights.legs, paths);
// console.log(options);
// console.log('Option 1: ', options[0].flights);

module.exports = {
    getOptionsForAllPaths
};