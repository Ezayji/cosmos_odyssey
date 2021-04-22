// latest pricelist query
const { getLatestPrices } = require('../queries/priceListQueries');

// paths
const { flightPaths, findAllPossiblePaths } = require('../algorithms/flightPaths');

// options combining
const { getOptionsForAllPaths } = require('../algorithms/flightOptions');

//sorting
const { quickSort, byPrice, byDistance, byTraveltime } = require('../algorithms/quickSort');

// req data check
const { notValidLocations, notValidFilter } = require('./helpers/flightsReqCheck');

// flitering
const { linearSearchCompanyNames } = require('../algorithms/linearSearch');



// get all available flights from a to b
const getAvailableOptions = async (req, res) => {
    const { from, to, filter, company } = req.query;
    let filterLow;

    // assign company name
    const company_name = company !== undefined ? company : false;

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
    const options = getOptionsForAllPaths(prices.data, paths, company_name);

    // if no options were found
    if(options.length === 0) return res.status(404).send('No options for requested selection');

    // sort results if filter is requested
    if(filter === 'price') quickSort(options, 0, options.length - 1, byPrice);

    if(filter === 'distance') quickSort(options, 0, options.length - 1, byDistance);

    if(filter === 'traveltime') quickSort(options, 0, options.length - 1, byTraveltime);

    // return results
    res.status(200).send({ id: prices.id, validUntil: prices.valid_until, options: options });
};


// get available companies of current pricelist
const getAvailableCompanies = async (req, res) => {
    // get latest prices
    const prices = await getLatestPrices();
    if(!prices) return res.status(500).send('Something went wrong, please try again');

    const companies = linearSearchCompanyNames(prices.data);

    res.status(200).send(companies);
};

module.exports = {
    getAvailableOptions,
    getAvailableCompanies
};