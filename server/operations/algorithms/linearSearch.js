
// fliter out selected company flights
function linearSearchCoFlight(list, company){
    const newList = [];

    for(const flight of list){
        if(flight.company.name === company) newList.push(flight);
    };

    return newList;
};


// fliter out unique companies
function linearSearchCompanyNames(list){
    const companies = [];
    for(const pricelist of list){
        for(const flight of pricelist.providers){
            if(!companies.includes(flight.company.name)) companies.push(flight.company.name);
        };
    };
    return companies;
};


module.exports = {
    linearSearchCoFlight,
    linearSearchCompanyNames
};