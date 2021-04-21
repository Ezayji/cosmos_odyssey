const pool = require('../config/pool');


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
    insertPriceList
};