const pool = require('../config/pool');

// insert a new booking
const insertNewBooking = async (data) => {
    const { id, first_name, last_name, routes, price, travel_time, transport_company_names } = data;
    const text = 'INSERT INTO bookings (id, first_name, last_name, routes, price, travel_time, transport_company_names) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    try{    
        await pool.query(text, [id, first_name, last_name, routes, price, travel_time, transport_company_names]);
        return true;
    } catch (e) {
        console.log('Booking insert error: \n', e);
        return false;
    };
};

module.exports = {
    insertNewBooking
};