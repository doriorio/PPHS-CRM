
const User = require('../models/user');


module.exports = {
    new: newReservation,
    create,
    show
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
    User.findById(req.params.id, function(err, user){
        console.log(req.params.id);
        console.log(req.body);
        user.reservations.push(req.body);
        console.log(user + "before");
        user.save(function(err){
            console.log(user + "after");
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