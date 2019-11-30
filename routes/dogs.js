var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersCtrl = require('../controllers/users');
var dogsCtrl = require('../controllers/dogs');


router.get('/:id/dogs/new', dogsCtrl.new);

module.exports = router;
