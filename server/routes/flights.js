const express = require('express');
const flightsRouter = express.Router();

// Get available flights from A to B
flightsRouter.get('/');

module.exports = flightsRouter;