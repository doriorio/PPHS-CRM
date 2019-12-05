
const User = require('../models/user');

module.exports = {
    new: newDog,
    create,
}

//this will be the form to add a dog
function newDog(req, res){
    res.render(`user/dogs/new`, {
        user: req.user
    });
}

function create(req, res){
    let user = req.user;
    req.user.dogs.push(req.body);
    console.log(user);
     user.save(function(err){
            res.redirect(`/user/${user._id}/show`);
        });
    // });
}