
const User = require('../models/user');

module.exports = {
    new: newDog,
    create,
}

//this will be the form to add a dog
function newDog(req, res){
    let user = req.user;
    console.log(user)
    let id = req.params.id;
    res.render(`user/dogs/new`, {
        id,
        user: req.user
    });
}

function create(req, res){

    let user = req.user;
    console.log(user);
    req.user.dogs.push(req.body);
    console.log(user);
    // User.findById(req.params.id, function(err, user){
    //     user.dogs.push(req.body);
        user.save(function(err){

            res.redirect(`/user/${req.params.id}/show`);
        });
    // });
}