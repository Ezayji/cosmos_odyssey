
const express = require('express');
const app = express();
const cors = require('cors');
const { autoPriceUpdate } = require('./operations/config/priceLists');

module.exports = app;

// port
const PORT = process.env.PORT || 5000;

// cors
app.use(cors());

// bodyparser
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// routes
const flightsRouter = require('./routes/flights');
app.use('/api/flights', flightsRouter);

const bookingsRouter = require('./routes/bookings');
app.use('/api/bookings', bookingsRouter);

// automated price list updating
autoPriceUpdate();

// server initialization
app.listen(PORT, () => {
    console.log(`The app is now listening on port ${PORT}`);
});