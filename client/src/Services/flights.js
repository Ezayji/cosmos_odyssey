import host from './host';

import axios from 'axios';

// get flights form a to b 
export async function getFlights(data) {
    const { from, to, filter, company } = data;
    const query = `?from=${from}&to=${to}`;
    const queryFilter = filter !== undefined ? `&filter=${filter}` : '';
    const companyFilter = company !== undefined ? `&company=${company.replaceAll(' ', '+')}` : '';
    
    const url = `${host}/api/flights${query}${queryFilter}${companyFilter}`;
    
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.log('Flight request error:\n', e)
        return false;
    };
};

