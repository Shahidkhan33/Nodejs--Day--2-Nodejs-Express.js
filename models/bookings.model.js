const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookingSchema = new Schema({
    bookingId : Number,
    customerName : String,
    roomName : String,
    roomId : Number,
    date : String,
    start : String,
    end : String,
    status : String
})

module.exports = mongoose.model("bookings",bookingSchema);