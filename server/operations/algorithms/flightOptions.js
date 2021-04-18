// find next flight
const findNextFlight = (priceList, from, to, takeOff) => {
    let pathPrices = [];
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

    // sort pricelist by flightStart
    

    // find the first path with greater or equal takeoff time
    for(let i = 0; i < pathPrices.length; i++){
        if (new Date(pathPrices[i].flightStart).valueOf() >= takeOff){
            flight = pathPrices[i];
            break;
        };
    };

    if(!flight) return false;

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

        // else
        option.price += flight[0].price;
        option.distance += flight[1];
        option.travelTime += new Date(flight[0].flightEnd).valueOf() - new Date(flight[0].flightStart).valueOf();
        if(!option.company_names.includes(flight[0].company.name)) option.company_names.push(flight[0].company.name);
        option.flights.push(flight[0]);

        takeOff = new Date(option.flightEnd).valueOf();

        if(i === 1) option.start = new Date(flight[0].flightStart).valueOf();
        if(i === path.length - 2) option.end = new Date(flight[0].flightEnd).valueOf();
    };

    return option;

};