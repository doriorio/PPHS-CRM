var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dogSchema = new Schema({
    dogName: String,
    breed: {
        required: true,
        type: String
    },
    age: Number,
    vaccinationDates: Date,
    notes: String,
    foodBrand: String,
    feedingFrequency: Number
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
    vetPhone: Number,
    emergencyContactfn: String,
    emergencyContactln: String,
    dogs: [dogSchema],
    reservations: [{type: Schema.Types.ObjectId, ref: 'Reservation'}],
    email: String,
    googleId: []
})

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Dog', dogSchema);

