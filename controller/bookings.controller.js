const BookingsRouter = require('express').Router();
const bookingModel = require('../models/bookings.model');


BookingsRouter.get('/',(req,res,next) => {
    bookingModel.find()
    .then(response => {
        if(response && response.length>0){
            return res.status(200).json({
                result : response,
                success : true,
                message : "booking collection create successfully"
            })
        }
        else{
            return res.status(200).json({
                result : [],
                success : true,
                message : "booking collection create successfully"
            })
        }
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "booking collection create failed",
            Error : err
        })
    })
})


BookingsRouter.post('/createBooking', (req,res,next) => {
    const data = req.body;
    const NewBooking = new bookingModel(data);
    NewBooking.save()
    .then(response => {
        return res.status(200).json({
            result : response,
            success : true,
            message : "create booking successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "create booking failed",
            Error : err
        })
    })
})

BookingsRouter.get('/bookedRoom', (req,res,next) => {
    bookingModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.status === "confirmed");
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "find bookedData successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "find bookedData failed",
            Error : err
        })
    })
})


BookingsRouter.get('/:name', (req,res,next) => {
    const {name} = req.params;
    bookingModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.customerName == name);
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "find booked customer details successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "booked customers find failed",
            Error : err
        })
    })
})

module.exports = BookingsRouter;