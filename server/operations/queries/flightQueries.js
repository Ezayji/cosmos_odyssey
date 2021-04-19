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

module.exports = {
    getLatestPrices
};