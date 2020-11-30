var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Return to home Page */
router.get('/index', function(req, res, next) {
  res.render('index');
});

/* GET About Us Page*/
router.get('/aboutus', function (req, res, next) {
    res.render('aboutus');
});

/* GET Login Page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET registration Page*/
router.get('/registration', function (req, res, next) {
  res.render('registration');
});

/* GET French Toast recipe Page*/
router.get('/French%20Toast', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "French Toast"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'French Toast', ft :'v23_17'
      });
  });
});

/* GET Pancake recipe Page*/
router.get('/pancakes', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Pancakes"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Pancakes', ft :'v23_18'
      });
  });
});

/* GET Avocado Toast recipe Page*/
router.get('/Avocado%20Toasts', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Avocado Toasts"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Avocado Toast', ft :'v23_19'
      });
  });
});

/* GET Scramble Egg and Cheese recipe Page*/
router.get('/Scrambled%20Eggs%20and%20Cheese', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Scrambled Eggs and Cheese"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : '	Scrambled Eggs and Cheese', ft :'v23_20'
      });
  });
});

/* GET Bacon Egg and Cheese Bagel recipe Page*/
router.get('/Bacon%20Egg%20and%20Cheese%20Bagel', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Bacon Egg and Cheese Bagel "},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Bacon Egg and Cheese Bagel', ft :'v23_21'
      });
  });
});

/* GET Stuffed Chicken recipe Page*/
router.get('/Stuffed%20Chicken', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Stuffed Chicken"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Stuffed Chicken', ft :'v23_22'
      });
  });
});

/* GET BLT recipe Page*/
router.get('/blt', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "BLT"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'BLT', ft :'v23_23'
      });
  });
});

/* GET Grill Cheese recipe Page*/
router.get('/Grill%20Cheese', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Grill Cheese"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Grill Cheese', ft :'v23_24'
      });
  });
});

/* GET Honey Lime Chicken recipe Page*/
router.get('/Honey%20Lime%20Chicken', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Honey Lime Chicken"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Honey Lime Chicken', ft :'v23_26'
      });
  });
});

/* GET Instant Pot Ribs recipe Page*/
router.get('/Instant%20Pot%20Ribs', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Instant Pot Ribs"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Instant Pot Ribs', ft :'v23_27'
      });
  });
});

/* GET Grilled Salmon With Pesto Crust recipe Page*/
router.get('/Grilled%20Salmon%20With%20Pesto%20Crust', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Grilled Salmon With Pesto Crust"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Grilled Salmon With Pesto Crust', ft :'v23_28'
      });
  });
});

/* GET Summer Nights Eggplant recipe Page*/
router.get('/Summer%20Nights%20Eggplant', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Summer Nights Eggplant"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Summer Nights Eggplant', ft :'v23_29'
      });
  });
});

/* GET Easy Meatballs recipe Page*/
router.get('/Easy%20Meatballs', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Easy Meatballs"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Easy Meatballs', ft :'v23_30'
      });
  });
});

/* GET Juicy Roasted Chicken recipe Page*/
router.get('/Juicy%20Roasted%20Chicken', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Juicy Roasted Chicken"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Juicy Roasted Chicken', ft :'v23_31'
      });
  });
});

/* GET Beef Stroganoff with Ground Beef recipe Page*/
router.get('/Beef%20Stroganoff%20with%20Ground%20Beef', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Beef Stroganoff with Ground Beef"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Beef Stroganoff with Ground Beef', ft :'v23_32'
      });
  });
});

/* GET Low Carb Turkey-Stuffed Peppers recipe Page*/
router.get('/Low%20Carb%20Turkey-Stuffed%20Peppers', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Low Carb Turkey-Stuffed Peppers"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Low Carb Turkey-Stuffed Peppers', ft :'v23_33'
      });
  });
});

/* GET Bubba's Jambalaya recipe Page*/
router.get("/Bubba's%20Jambalaya", function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Bubba's Jambalaya"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : "Bubba's Jambalaya", ft :'v23_34'
      });
  });
});

/* GET Easy Homemade Chili recipe Page*/
router.get('/Easy%20Homemade%20Chili', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Easy Homemade Chili"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Easy Homemade Chili', ft :'v23_35'
      });
  });
});

/* GET chili recipe Page*/
router.get('/chili', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Chili"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Chili', ft :'v23_36'
      });
  });
});

/* GET Spicy Pork Tenderloin with Apples and Sweet Potatoes recipe Page*/
router.get('/Spicy%20Pork%20Tenderloin%20with%20Apples%20and%20Sweet%20Potatoes', function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Spicy Pork Tenderloin with Apples and Sweet Potatoes"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : 'Spicy Pork Tenderloin with Apples and Sweet Potatoes', ft :'v23_37'
      });
  });
});

/* GET World's Best Lasagna recipe Page*/
router.get("/World's%20Best%20Lasagna", function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "World's Best Lasagna"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : "World's Best Lasagna", ft :'v23_38'
      });
  });
});

/* GET Chef John's Stuffed Peppers recipe Page*/
router.get("/Chef%20John's%20Stuffed%20Peppers", function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Chef John's Stuffed Peppers"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : "Chef John's Stuffed Peppers", ft :'v23_39'
      });
  });
});

/* GET Nat's Shrimp and Veggie Stuffed Zucchini recipe Page*/
router.get("/Nat's%20Shrimp%20and%20Veggie%20Stuffed%20Zucchini", function(req, res) {
  var db = req.db;
  var collection = db.get('recipes');
  collection.find({"title" : "Nat's Shrimp and Veggie Stuffed Zucchini"},function(e,docs){
      res.render('recipepage', {
          "array" : docs, title : "Nat's Shrimp and Veggie Stuffed Zucchini", ft :'v23_40'
      });
  });
});



module.exports = router;
