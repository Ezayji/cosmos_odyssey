const express = require('express');
const bookingsRouter = express.Router();

const { postNewBooking } = require('../operations/middleware/bookings');


// Get active bookings
bookingsRouter.get('/');

// Post a new booking
bookingsRouter.post('/', postNewBooking);

module.exports = bookingsRouter;