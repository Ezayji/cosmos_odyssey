
const express = require('express');
const app = express();
const cors = require('cors');

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

// server initialization
app.listen(PORT, () => {
    console.log(`The app is now listening on port ${PORT}`);
});