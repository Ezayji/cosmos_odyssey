// latest pricelist query
const { getLatestPrices } = require('../queries/flightQueries');

// paths
const { flightPaths, findAllPossiblePaths } = require('../algorithms/flightPaths');

// options combining
const { getOptionsForAllPaths } = require('../algorithms/flightOptions');

//sorting
const { quickSort, byPriceAsc, byDistanceAsc, byTraveltimeAsc } = require('../algorithms/quickSort');

// req data check
const { notValidLocations, notValidFilter } = require('./helpers/flightsReqCheck');


// get all available flights from a to b
const getAvailableOptions = async (req, res) => {
    const { from, to, filter } = req.query;
    const filterLow = filter.toLowerCase();

    // check if valid locations
    const notValidLocs = notValidLocations(from, to);
    if(notValidLocs) return res.status(400).send(notValid);

    // check if valid filter (if filter is requested)
    if (filter) {
        const notValidFltr = notValidFilter(filterLow);
        if (notValidFltr) return res.status(400).send(notValidFltr);
    };

    // get latest prices
    const prices = await getLatestPrices();
    if(!prices) return res.status(500).send('Something went wrong, please try again');

    // find paths
    const paths = findAllPossiblePaths(flightPaths, from, to);

    // combine options
    const options = getOptionsForAllPaths(prices, paths);

    // sort results if filter is requested
    if(filter === 'priceasc') quickSort(options, 0, options.length - 1, byPriceAsc);

    if(filter === 'distanceasc') quickSort(options, 0, options.length - 1, byDistanceAsc);

    if(filter === 'traveltimeasc') quickSort(options, 0, options.length - 1, byTraveltimeAsc);

    // return results
    res.status(200).send(options);
};

module.exports = {
    getAvailableOptions
};