const User = require('../models/user');
var moment = require('moment');
module.exports = {
    new: newUser,
    create,
    show,
    index
};


//new user FORM
function newUser(req, res){
     res.render('user/new', {
            user: req.user,

    });
}

function show(req, res){
        res.render('user/show', {
            user: req.user,
            moment: moment
        });

}

function create(req, res){

    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => 
    {
        if (err) return res.status(500).send(err);
        res.redirect(`/user/${req.params.id}/show`)

    });
}



function index(req, res, next){
        res.render('user/index', {
            user: req.user,
     
        });

}