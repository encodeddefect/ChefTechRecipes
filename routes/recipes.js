var express = require('express');
var router = express.Router();

/* GET recipes page. */
router.get('/', function(req, res, next) {
    res.render('recipes');
  });


module.exports = router;
