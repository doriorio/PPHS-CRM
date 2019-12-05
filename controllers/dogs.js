
const User = require('../models/user');

module.exports = {
    new: newDog,
    create,
    edit,
    update
}


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
}

function edit(req, res){
    console.log('edit hitting');
    let uId = req.params.uid;
    let dId = req.params.did;
    console.log(uId)
    console.log(dId)
    User.findById(uId, function(err, user){
        res.render(`user/dogs/edit`, {
            dog: user.dogs.dId,
            user: req.user
        });

    });

}

function update(req, res){
    req.user.dogs.push(req.body);

    req.user.save(function(err){
        res.redirect(`/user/${req.user._id}/show`);
    })
}

