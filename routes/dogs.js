var express = require('express');
var router = express.Router();
var passport = require('passport');
var dogsCtrl = require('../controllers/dogs');


router.get('/user/:id/dogs/new', dogsCtrl.new);
router.post('/:id/dogs', dogsCtrl.create);

module.exports = router;
