const mongoose = require('mongoose');
const {Schema} = mongoose;

const roomsSchema = new Schema({
    roomName : String,
    seats : Number,
    amenities : Array,
    price : Number
})

module.exports = mongoose.model("rooms",roomsSchema);