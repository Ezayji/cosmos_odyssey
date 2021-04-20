const express = require('express');
const flightsRouter = express.Router();

const { getAvailableOptions, getAvailableCompanies } = require('../operations/middleware/flights');


// Get all available companies
flightsRouter.get('/companies', getAvailableCompanies);


// Get all available flights from A to B sorted / random or by company sorted / random
flightsRouter.get('/', getAvailableOptions);


module.exports = flightsRouter;