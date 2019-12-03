
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


//this works!
function create(req, res){
    console.log('hitting create route for resos')
    let user = req.params.id;
    Reservation.create(req.body, function(err, reso){
        console.log(reso);
        res.redirect(`/user/${user}/reservations/show`);
    });

}
//this works!
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
function edit(req, res) {
    console.log('hitting edit route');
    console.log(req.params.rid)
    console.log(req.params.uid)

    let reso = req.params.id;
    let user = req.params.uid;
    Reservation.findOne({
        reso
    }, function (err, reso) {
        console.log(user);
        res.render(`user/reservations/edit`, {
            reso,
            user
        });
    })

}

function update(req, res){
    console.log('hitting update route for resos');

    let reso = req.params.rid;
    let user = req.params.uid;
    let resoUpdate = req.body;
    Reservation.findByIdAndUpdate(reso, resoUpdate, function(err, reso){
        console.log(reso);
        res.redirect(`/user/${user}/reservations/show`);
    });
}