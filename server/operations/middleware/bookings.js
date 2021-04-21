
const { uuid } = require('uuidv4');

const { insertNewBooking } = require('../queries/bookingQueries');

// post a new booking
const postNewBooking = async (req, res) => {

    const { first_name, last_name, routes, price, travel_time, transport_company_names } = req.body;

    const data = {
        id: uuid(),
        first_name,
        last_name,
        routes,
        price,
        travel_time,
        transport_company_names
    };

    const insert = await insertNewBooking(data);
    if(!insert) return res.status(500).send('Something went wrong, please try again');

    res.status(200).send();

};


// get all bookings that have prices from 15 last price lists
const getAllBookings = async (req, res) => {

};


module.exports = {
    postNewBooking
};