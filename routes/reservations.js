var express = require('express');
var router = express.Router();
var passport = require('passport');
var resoCtrl = require('../controllers/reservations');


router.get('/user/:id/reservations/new', resoCtrl.new);
router.post('/user/:id/reservations', resoCtrl.create);
router.get('/user/:id/reservations/show', resoCtrl.show);
router.get('/user/:uid/reservations/:rid/edit', resoCtrl.edit);
router.post('/user/:uid/reservations/:rid', resoCtrl.update);


module.exports = router;


