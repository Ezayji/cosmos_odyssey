import host from './host';

import axios from 'axios';

// get flights form a to b 
export async function getFlights(data) {
    const { from, to, filter, company } = data;
    const query = `?from=${from}&to=${to}`;
    const queryFilter = filter !== undefined ? `&filter=${filter}` : '';
    
    let url;
    if(company) {
        url = `${host}/api/flights/${company}${query}${queryFilter}`;
    } else {
        url = `${host}/api/flights${query}${queryFilter}`;
    };

    try{
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.log('Flight request error:\n', e)
        return false;
    };
};

