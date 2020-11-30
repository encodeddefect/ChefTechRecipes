var express = require('express');
var router = express.Router();

/* GET Login Page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET Registration Page*/
router.get('/registration', function (req, res, next) {
  res.render('registration');
});


module.exports = router;
