const pool = require('../config/pool');

// insert a new booking
const insertNewBooking = async (data) => {
    const { id, first_name, last_name, routes, price, travel_time, transport_company_names, price_list_id } = data;
    const text = 'INSERT INTO bookings (id, first_name, last_name, routes, price, total_travel_time, transport_company_names, price_list_id, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    const date = Date.now();
    try{    
        await pool.query(text, [id, first_name, last_name, JSON.stringify(routes), price, travel_time, JSON.stringify(transport_company_names), price_list_id, date]);
        return true;
    } catch (e) {
        console.log('Booking insert error: \n', e);
        return false;
    };
};

// get bookings
const getBookings = async () => {
    const text = 'SELECT * FROM bookings ORDER BY date DESC';
    try{
        const results = await pool.query(text);
        return results.rows;
    } catch (e) {
        console.log('Get Bookings Error:\n', e);
        return false;
    }
};

module.exports = {
    insertNewBooking,
    getBookings
};