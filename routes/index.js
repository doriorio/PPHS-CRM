var express = require('express');
var router = express.Router();
var passport = require('passport');
var moment = require('moment');


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


router.get('/javascripts/datecolor.js', function(req,res){
  console.log('hitting');
  // res.send({moment: moment})
  res.send('hello')
} )

router.get('/test', (req,res)=>{
  res.send('test')
})



module.exports = router;
