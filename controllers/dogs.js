
const User = require('../models/user');

module.exports = {
    new: newDog,
    create,
}

//this will be the form to add a dog
function newDog(req, res){
    let id = req.params.id;
    res.render(`user/dogs/new`, {
        id
    });
}

function create(req, res){
    User.findById(req.params.id, function(err, user){
        user.dogs.push(req.body);
        user.save(function(err){

            res.redirect(`/user/${req.params.id}/show`);
        });
    });
}