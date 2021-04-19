// latest pricelist query
const { getLatestPrices } = require('../queries/flightQueries');

// paths
const { flightPaths, findAllPossiblePaths } = require('../algorithms/flightPaths');

// options combining
const { getOptionsForAllPaths } = require('../algorithms/flightOptions');

//sorting
const {
    quickSort, 
    byPriceAsc, 
    byPriceDesc, 
    byDistanceAsc, 
    byDistanceDesc, 
    byTraveltimeAsc, 
    byTraveltimeDesc 
} = require('../algorithms/quickSort');

// req data check
const { notValidLocations, notValidFilter } = require('./helpers/flightsReqCheck');



// get all available flights from a to b
const getAvailableOptions = async (req, res) => {
    const { from, to, filter } = req.query;
    let filterLow;

    // check if valid locations
    const notValidLocs = notValidLocations(from, to);
    if(notValidLocs) return res.status(400).send(notValidLocs);

    // check if valid filter (if filter is requested)
    if (filter) {
        filterLow = filter.toLowerCase();
        const notValidFltr = notValidFilter(filterLow);
        if (notValidFltr) return res.status(400).send(notValidFltr);
    };

    // get latest prices
    const prices = await getLatestPrices();
    if(!prices) return res.status(500).send('Something went wrong, please try again');

    // find paths
    const paths = findAllPossiblePaths(flightPaths, from, to);

    // combine options
    const options = getOptionsForAllPaths(prices.data, paths);

    // sort results if filter is requested
    if(filter === 'priceasc') quickSort(options, 0, options.length - 1, byPriceAsc);
    if(filter === 'pricedesc') quickSort(options, 0, options.length - 1, byPriceDesc);

    if(filter === 'distanceasc') quickSort(options, 0, options.length - 1, byDistanceAsc);
    if(filter === 'distancedesc') quickSort(options, 0, options.length - 1, byDistanceDesc);

    if(filter === 'traveltimeasc') quickSort(options, 0, options.length - 1, byTraveltimeAsc);
    if(filter === 'traveltimedesc') quickSort(options, 0, options.length - 1, byTraveltimeDesc);

    // return results
    res.status(200).send({ validUntil: prices.valid_until, options: options });
};

module.exports = {
    getAvailableOptions
};