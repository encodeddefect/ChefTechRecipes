var express = require('express');
var router = express.Router();

/* Return lunch recipes Page */
  router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('recipes');
    collection.find({"type" : "lunch"},function(e,docs){
        res.render('lunch', {
            "lunch" : docs
        });
    });
});


module.exports = router;