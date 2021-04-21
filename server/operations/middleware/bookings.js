
const { uuid } = require('uuidv4');

const { insertNewBooking, getBookings } = require('../queries/bookingQueries');

const { getLatestPricelistId } = require('../queries/priceListQueries');

const { notValidData } = require('./helpers/bookingsReqCheck');

// post a new booking
const postNewBooking = async (req, res) => {

    const { first_name, last_name, routes, price, travel_time, transport_company_names, price_list_id } = req.body;

    // check if fields are present and name lengths are acceptable
    const notValid = notValidData(req.body);
    if(notValid) return res.status(400).send(notValid);

    // get latest price list id from db
    const latestId = await getLatestPricelistId();
    if(!latestId) return res.status(500).send('Something went wrong, please try again');

    // check if requested booking includes the latest pricelist id
    if(latestId !== price_list_id) return res.status(400).send('The pricelist is expired');

    const data = {
        id: uuid(),
        first_name,
        last_name,
        routes,
        price,
        travel_time,
        transport_company_names,
        price_list_id
    };

    // insert booking into db
    const insert = await insertNewBooking(data);
    if(!insert) return res.status(500).send('Something went wrong, please try again');

    res.status(200).send();

};


// get all bookings that have prices from 15 last price lists
const getAllBookings = async (req, res) => {
    const bookings = await getBookings();
    
    // query failed
    if(!bookings) return res.status(500).send('Something went wrong, please try again');
    
    // query was successful
    res.status(200).send(bookings);
};


module.exports = {
    postNewBooking,
    getAllBookings
};