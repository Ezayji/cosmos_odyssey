const express = require('express');
const bookingsRouter = express.Router();

// Get active bookings
bookingsRouter.get('/');

// Post a new booking
bookingsRouter.post('/');

module.exports = bookingsRouter;