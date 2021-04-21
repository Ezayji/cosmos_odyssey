const express = require('express');
const bookingsRouter = express.Router();

const { postNewBooking, getAllBookings } = require('../operations/middleware/bookings');


// Get active bookings
bookingsRouter.get('/', getAllBookings);

// Post a new booking
bookingsRouter.post('/', postNewBooking);

module.exports = bookingsRouter;