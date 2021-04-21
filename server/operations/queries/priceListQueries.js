const pool = require('../config/pool');


// get the latest price list
const getLatestPrices = async () => {
    const text = 'SELECT valid_until, data FROM price_list ORDER BY valid_until DESC LIMIT 1';
    try{
        const result = await pool.query(text);
        return result.rows[0];
    } catch (e) {
        console.log('Get Latest Price Error: ', e);
        return false;
    };
};


// get the latest price list id
const getLatestPricelistId = async () => {
    const text = 'SELECT id FROM price_list ORDER BY valid_until DESC LIMIT 1';
    try{
        const result = await pool.query(text);
        return result.rows[0].id;
    } catch (e) {
        console.log('Get Latest Pricelist ID Error: ', e);
        return false;
    };
};


// Insert new pricelist into db
const insertPriceList = async (pricelist) => {
    const { id, validUntil, legs } = pricelist;
    const text = 'INSERT INTO price_list (id, valid_until, data) VALUES ($1, $2, $3)';
    const validUntilMs = new Date(validUntil).valueOf();

    try{
        await pool.query(text, [id, validUntilMs, JSON.stringify(legs)]);
        return validUntilMs;
    } catch (e) {
        console.log('Price Insert: ', e);
        return false;
    };

};


module.exports = {
    getLatestPrices,
    getLatestPricelistId,
    insertPriceList
};