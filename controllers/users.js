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
    let id = req.params.id;

    res.render(`user/new`, {id});
}

//show the form?? 
function show(req, res){
    console.log('hitting show');
    User.findById(req.params.id, function(err, user){
        res.render('user/show', {user});
    });
    // User.findById(req.params.id), function(err, user) {
    //     console.log(user);
        // res.render(`/user/show`, {user});
    // };
    // let user = req.params.id;

}


//i think this create should be more like an update
function create(req, res){
    console.log("hitting create");
    console.log(req.body);

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