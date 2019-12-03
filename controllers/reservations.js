
const User = require('../models/user');
const Reservation = require('../models/reservation');


module.exports = {
    new: newReservation,
    create,
    show,
    edit,
    update
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


//change
function create(req, res){
    console.log('hitting create route for resos')
    let user = req.params.id;
    Reservation.create(req.body, function(err, reso){
        console.log(reso);
        res.redirect(`/user/${user}/reservations/show`);
    });

}

function show(req, res){
    let user = req.params.id;
    console.log('hitting show route for resos')
    Reservation.find({}, function(err,resos){
        console.log(resos)
        User.findById(req.params.id, function (err, user){
            res.render(`user/reservations/show`, {
                user,
                resos

        });
    });
    });
}
//change
function edit(req, res){
    console.log('hitting edit route');
    
    console.log(User.reservations)
    User.findOne({reservations: req.params.id}, function(err, reso){
        console.log(reso)
        res.render(`user/reservations/edit`, {

        })

    });

}

function update(req, res){
    User.reservations.findById(req.params.id, function(err, user){
        console.log("???");
    });
}