var express = require('express');
var router = express.Router();
var emailHelper = require('../emails/emailHelper');
var nodemailer = require('nodemailer');

//get contact information
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;

router.post('/sendMail', emailHelper.handleSayHello ,(req, res, next) => {
  res.redirect('/');
});

module.exports = router;