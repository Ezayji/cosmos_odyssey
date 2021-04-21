
const invalid = 'Invalid request body';

// check for empty fields and name length
const notValidData = (data) => {
    const { first_name, last_name, routes, price, travel_time, transport_company_names, price_list_id } = data;

    if(first_name === '' || first_name === undefined) return invalid;
    if(last_name === '' || last_name === undefined) return invalid;
    if(routes === '' || routes === undefined) return invalid;
    if(price === '' || price === undefined) return invalid;
    if(travel_time === '' || travel_time === undefined) return invalid;
    if(transport_company_names === '' || transport_company_names === undefined) return invalid;
    if(price_list_id === '' || price_list_id === undefined) return invalid;

    if(!Array.isArray(routes)) return invalid;
    if(!Array.isArray(transport_company_names)) return invalid;

    if(first_name.length > 30) return 'First name can not be longer than 30 characters';
    if(last_name.length > 30) return 'Last name can not be longer than 30 chracters';

    return false;
};

module.exports = {
    notValidData
};