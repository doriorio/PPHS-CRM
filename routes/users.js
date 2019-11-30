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

router.get('/user/:id/new', usersCtrl.new);
router.post('/user/:id', usersCtrl.create);
router.get('/user/:id/show', usersCtrl.show);
router.get('/user', usersCtrl.index);


module.exports = router;
