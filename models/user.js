var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dogSchema = new Schema({
    dogName: String,
    breed: String,
    age: Number,
    vaccinationDates: Date,
    notes: String,
    foodBrand: String,
    feedingFrequency: Number
})


var reservationSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['grooming', 'daycare', 'boarding']
    },
    checkIn: Date,
    checkOut: Date,
    notes: String,
    dog: String
})


var userSchema = new Schema({
    name: String,
    authorizedppl: String,
    phone: Number,
    streetAdd: Number,
    street: String,
    city: String,
    zip: Number,
    vetName: String,
    emergencyContactfn: String,
    emergencyContactln: String,
    dogs: [dogSchema],
    reservations: [reservationSchema],
    email: String,
    googleId: []
})

module.exports = mongoose.model('User', userSchema);

