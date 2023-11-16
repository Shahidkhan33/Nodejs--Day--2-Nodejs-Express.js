const express = require('express');
const APP_SERVER = express();

APP_SERVER.get('/', (req,res,next) => {
    res.send("<h1>Hall-Booking</h1>")
});
APP_SERVER.use('/rooms',require('./controller/rooms.controller'));
APP_SERVER.use('/bookings',require("./controller/bookings.controller"));
APP_SERVER.use('/users',require('./controller/users.controller'));

module.exports = APP_SERVER;