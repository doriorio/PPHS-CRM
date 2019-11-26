var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    firstName: String,
    lastName: String,
    authorizedppl: String,
    phone: Number,
    streetAdd: Number,
    street: String,
    city: String,
    zip: Number,
    vetName: String,
    emergencyContactfn: String,
    emergencyContactln: String,
    pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);