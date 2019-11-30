const Dog = require('../models/dog');

module.exports = {
    new: newDog,
}

//this will be the form to add a dog
function newDog(req, res){
    let id = req.params.id;
    res.render(`user/dogs/new`);
    console.log(req.params.id)
}

