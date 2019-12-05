var express = require('express');
var router = express.Router();
var passport = require('passport');
var dogsCtrl = require('../controllers/dogs');


router.get('/user/:id/dogs/new', dogsCtrl.new);
router.post('/user/:id/dogs', isLoggedIn, dogsCtrl.create);
router.get('/user/:uid/dogs/:did/edit', isLoggedIn, dogsCtrl.edit);
router.put('/user/:id/dogs/', isLoggedIn, dogsCtrl.update);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;

