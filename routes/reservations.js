var express = require('express');
var router = express.Router();
var passport = require('passport');
var resoCtrl = require('../controllers/reservations');


router.get('/user/:id/reservations/new', resoCtrl.new);
router.post('/user/:id/reservations/', resoCtrl.create);
router.get('/user/:id/reservations/show', resoCtrl.show);
router.get('/reservations/:id/edit/', resoCtrl.edit);
module.exports = router;


