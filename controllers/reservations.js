
const User = require('../models/user');


module.exports = {
    new: newReservation,
    create,
    show,
    edit
}


function newReservation(req, res){
    console.log("hitting new reso");
    User.findById(req.params.id, function(err, user){
        res.render('user/reservations/new', {
            user,
            id: req.params.id
        });
    });
} 

function create(req, res){
    console.log("hitting create reso");
    console.log(req.body);
    User.findById(req.params.id, function(err, user){

        user.reservations.push(req.body);
        user.save(function(err){

            res.redirect(`/user/${req.params.id}/reservations/show`);
        });
});
}

function show(req, res){
    User.findById(req.params.id, function(err, user){
        console.log(user.reservations);
        res.render(`user/reservations/show`, {
            user,
            id: req.params.id
        });
    });
}

function edit(req, res){
    console.log('hitting edit route');

    res.render(`user/reservations/edit`, {
        // id: req.params.id,
    });
}

function update(req, res){
    User.reservations.findById(req.params.id, function(err, user){
        console.log("???");
    });
}