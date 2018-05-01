var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var account = require('../models/account.js');
var passport = require('passport');
require('../config/passport')(passport);

/* GET ALL accountS */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    account.find(function (err, accounts) {
      if (err) return next(err);
      res.json(accounts);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

/* SAVE account */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    account.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
