var express = require('express');
var router = express.Router();
var passport = require('passport');
var resoCtrl = require('../controllers/reservations');


router.get('/user/:id/reservations/new', resoCtrl.new);
router.post('/user/:id/reservations', isLoggedIn, resoCtrl.create);
router.get('/user/:id/reservations/show', resoCtrl.show);
router.get('/user/:uid/reservations/:rid/edit', resoCtrl.edit);
router.put('/user/:uid/reservations/:rid', isLoggedIn, resoCtrl.update);
router.delete('/user/:uid/reservations/:rid', isLoggedIn, resoCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;


