var express = require('express');
var router = express.Router();

 /* Return breakfast recipes Page */


  router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('recipes');
    collection.find({"type" : "breakfast"},function(e,docs){
        res.render('breakfast', {
            "breakfast" : docs
        });
    });
});
module.exports = router;