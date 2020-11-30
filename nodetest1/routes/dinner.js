var express = require('express');
var router = express.Router();

    /* Return dinner recipes Page */
    router.get('/', function(req, res) {
      var db = req.db;
      var collection = db.get('recipes');
      collection.find({"type" : "dinner"},function(e,docs){
          res.render('dinner', {
              "dinner" : docs
          });
      });
  });

module.exports = router;