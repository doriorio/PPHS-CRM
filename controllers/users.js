const User = require('../models/user');
module.exports = {
    index,
    show,
    create
};

function show(req, res){
    let id = req.params.id;
    res.render('user/new', {id});
}
function index(req, res, next){
    console.log(req.params.id);
    res.render('user/index', {
        user: req.user,
    });
}


function create(req, res){
    console.log(req.body);
    req.body.user = req.params.id;
    User.create(req.body, function(err, user){
        res.redirect(`/users/${req.body.user}`);
    });
}