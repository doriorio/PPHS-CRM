const User = require('../models/user');
module.exports = {
    index
};

function index(req, res, next){
    res.render('users/index', {
        user: req.user,
    });
}