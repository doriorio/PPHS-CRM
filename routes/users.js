var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersCtrl = require('../controllers/users');


/* GET users listing. */
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/user',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/home');
});

router.get('/user/:id/new', isLoggedIn, usersCtrl.new);
router.post('/user/:id', isLoggedIn, usersCtrl.create);
router.get('/user/:id/show',isLoggedIn, usersCtrl.show);
router.get('/user', isLoggedIn, usersCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/home');
}

module.exports = router;
