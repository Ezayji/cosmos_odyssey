const express = require('express');
const flightsRouter = express.Router();

// Get available flights from A to B sorted or random
flightsRouter.get('/');

// Get available flights from A to B by a company sorted or random
flightsRouter.get('/:company_name')

module.exports = flightsRouter;