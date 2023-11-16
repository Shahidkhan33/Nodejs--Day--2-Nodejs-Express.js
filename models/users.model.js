const mongoose = require('mongoose');
const {Schema} = mongoose;

const usersSchema = new Schema({
    customerName : String,
    roomName : String,
    roomId : String,
    date : String,
    startTime : String,
    endTime : String
})

module.exports = mongoose.model("users",usersSchema);