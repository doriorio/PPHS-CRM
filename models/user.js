var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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
    dogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Dog'
    }],
    email: String,
    googleId: []
})

module.exports = mongoose.model('User', userSchema);


