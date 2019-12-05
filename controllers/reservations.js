
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
    // User.findById(req.params.id, function(err, user){
        res.render('user/reservations/new', {
            user: req.user,
            id: req.params.id
        });
    // });
} 


//this works!
function create(req, res){
    console.log('hitting create')
    let user = req.user._id;
    console.log(user);
    Reservation.create(req.body, function(err, reso){
        reso.user = user;
        console.log(reso);
        reso.save(function(err){
            res.redirect(`/user/${user}/reservations/show`);
        })

    });

}
//this works!
function show(req, res){

    let user = req.params.id;
    User.findById(req.params.id, function (err, user){
        Reservation.find({user: req.params.id}, function(err,resos){
            res.render(`user/reservations/show`, {
                user,
                resos: resos,
                moment: moment

        });
    });
    });
}
//change
function edit(req, res) {
    const rId = req.params.rid;
    let user = req.params.uid;
    let userObj = req.user;

    console.log(rId);
    Reservation.findById(rId, function (err, reso) {
        console.log(reso)
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

