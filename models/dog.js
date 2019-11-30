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

module.exports = mongoose.model('Dog', dogSchema);