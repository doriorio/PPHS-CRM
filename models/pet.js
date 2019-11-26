var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var petSchema = new Schema({
    petName: String,
    breed: String,
    age: Number,
    vaccinationDates: Date,
    notes: String,
    foodBrand: String,
    feedingFrequency: Number
})

module.exports = mongoose.model('Pet', petSchema);