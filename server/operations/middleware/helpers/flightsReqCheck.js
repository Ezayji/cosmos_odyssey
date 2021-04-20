const { flightPaths } = require('../../algorithms/flightPaths');

const filters = ['price', 'distance', 'traveltime'];

// check from and to
const notValidLocations = (from, to) => {
    // invalid from location
    if(flightPaths[from] === undefined) return `${from} is not a valid location`;
    
    //invalid to location
    if(flightPaths[to] === undefined) return `${to} is not a valid location`;
    
    // from and to match
    if(from === to) return 'From and To can not match';

    // all is valid
    return false;
};

// check filter
const notValidFilter = (filter) => {
    if(!filters.includes(filter)) return `${filter} is not a valid filter`;
    return false; 
};


module.exports = {
    notValidLocations,
    notValidFilter
};