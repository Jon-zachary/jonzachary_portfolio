var express = require('express');
var router = express.Router();

//get contact information
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;