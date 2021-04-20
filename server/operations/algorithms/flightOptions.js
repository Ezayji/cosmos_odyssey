const { quickSort, byFlightStart } = require('./quickSort');

const { linearSearchCoFlight } = require('./linearSearch');

// find next flight
const findNextFlight = (priceList, from, to, takeOff, company) => {
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

    // filter out flights with requested company
    if(company) pathPrices = linearSearchCoFlight(pathPrices, company);
    
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


const combineOption = (priceList, path, flightStart = 0, company) => {
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

        const flight = findNextFlight(priceList, path[i], path[i + 1], takeOff, company);

        if(!flight) return false;

        // build up option object
        option.price += flight[0].price;
        option.distance += flight[1];
        
        // add company name to list if it's not included and no certain company is requested
        if(!option.company_names.includes(flight[0].company.name) && !company) option.company_names.push(flight[0].company.name);
        // add flight to option object
        option.flights.push(flight[0]);

        // set the takeoff time for next flight
        takeOff = new Date(flight[0].flightEnd).valueOf();

        // add travel start time and end time
        if(i === 0) option.start = new Date(flight[0].flightStart).valueOf();
        if(i === path.length - 2) option.end = new Date(flight[0].flightEnd).valueOf();

    };

    // if flights for single company were requested
    if(company) option.company_names.push(company);

    // calculate total travel time including stop time between flights
    option.travelTime = option.end - option.start;
    return option;

};

const getOptionsForAllPaths = (priceList, paths, company = false) => {
    const options = [];
    
    for(const path of paths){
        let flightStart = 0;
        while(true){
            const option = combineOption(priceList, path, flightStart, company);
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
// const paths = findAllPossiblePaths(flightPaths, 'Mercury', 'Venus');
// console.log(paths);
// const options = getOptionsForAllPaths(flights.legs, paths, 'Space Odyssey');
// console.log(options);
// console.log('Option 1: ', options[0].flights);

module.exports = {
    findNextFlight,
    combineOption,
    getOptionsForAllPaths
};