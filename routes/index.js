var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next){
  res.render('index', {
    user: req.user,
    title: "WELCOME TO DOG APP"
  })
})
module.exports = router;
