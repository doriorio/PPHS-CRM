const User = require('../models/user');
module.exports = {
    new: newUser,
    create,
    show,
    index
};


//new user FORM
function newUser(req, res){
    console.log("hitting new");
    User.findById(req.params.id, function(err, user){
        res.render('user/new', {
            user,
            id: req.params.id
        });
    });
}
//show the form?? 
function show(req, res){
    console.log('hitting show');
    User.findById(req.params.id, function(err, user){
        res.render('user/show', {user});
    });
}


//i think this create should be more like an update
function create(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => 
    {
        if (err) return res.status(500).send(err);
        res.redirect(`/user/${req.params.id}/show`)
        console.log(user + "logging user at creation");
    });
}



function index(req, res, next){
    res.render('user/index', {
        user: req.user,
    });
}