const axios = require('axios');

const { insertPriceList } = require('../queries/priceListQueries');

// get pricelist
const callPricesApi = async () => {
    const url = 'https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices';
    
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.log('Price request: ', e);
        return false;
    };

};

// ==========================================================

// get prices and insert into db
const getNewPrices = async () => {
    const response = await callPricesApi();
    if(!response) return false;

    const insert = await insertPriceList(response);
    if(!insert) return false;

    // return valid until date
    return insert;
};

// =========================================================

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

// interval function for calling the api automatically

const autoPriceUpdate = async () => {
    let validUntil = Date.now();
    while(true){
        if(validUntil <= Date.now()){
            const response = await getNewPrices();
            if(!response) {
                await delay(1000 * 10);
                continue;
            };
            validUntil = response;
            console.log(validUntil);
        };

        await delay(1000 * 30);
    };
};

module.exports = {
    autoPriceUpdate
};