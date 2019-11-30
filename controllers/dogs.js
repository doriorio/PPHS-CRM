const Dog = require('../models/dog');
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
    console.log('at new dog route');
}

function create(req, res){
    console.log('hitting create dog route');
    User.findById(req.params.id, function(err, user){
        user.dogs.push(req.body);
        user.save(function(err){
            console.log(user.dogs);
            res.redirect('/show');
        })
    })
}