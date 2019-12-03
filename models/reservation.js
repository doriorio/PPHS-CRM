var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var reservationSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['grooming', 'daycare', 'boarding']
    },
    checkIn: Date,
    checkOut: Date,
    notes: String,
    dog: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})



module.exports = mongoose.model('Reservation', reservationSchema);

