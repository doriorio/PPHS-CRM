
const User = require('../models/user');
const Reservation = require('../models/reservation');
var moment = require('moment');


module.exports = {
    new: newReservation,
    create,
    show,
    edit,
    update,
    delete: deleteOne
}

//will need to scrub this for User.findbyId

function newReservation(req, res){
    User.findById(req.params.id, function(err, user){
        res.render('user/reservations/new', {
            user,
            id: req.params.id
        });
    });
} 


//this works!
function create(req, res){

    let user = req.params.id;
    Reservation.create(req.body, function(err, reso){
        reso.user = req.params.id;
        reso.save(function(err){
            res.redirect(`/user/${user}/reservations/show`);
        })

    });

}
//this works!
function show(req, res){
    console.log(req.user,"this is the req.user <<<<<<<<<<<<<<<<<<<<<<<<<<<")
    let user = req.params.id;
    Reservation.find({}, function(err,resos){
        User.findById(req.params.id, function (err, user){
            res.render(`user/reservations/show`, {
                user,
                resos,
                moment: moment

        });
    });
    });
}
//change
function edit(req, res) {
    let reso = req.params.id;
    let user = req.params.uid;
    let userObj = req.user;
    console.log(userObj);
    Reservation.findOne({reso}, function (err, reso) {
        res.render(`user/reservations/edit`, {
            reso,
            user,
            userObj
        });
    })

}

function update(req, res){
    let reso = req.params.rid;
    let user = req.params.uid;
    let resoUpdate = req.body;
    Reservation.findByIdAndUpdate(reso, resoUpdate, function(err, reso){
        
        res.redirect(`/user/${user}/reservations/show`);
    });
}

function deleteOne(req, res){
    console.log('hitting delete');
    let reso = req.params.rid;
    let user = req.params.uid;
    console.log(reso, user);
    Reservation.deleteOne({"_id": reso}, function(err, reso){
        res.redirect(`/user/${user}/reservations/show`);
    })

}

