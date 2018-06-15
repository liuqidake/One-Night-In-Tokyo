const express = require("express");
var router = express.Router();


router.get('/', function(req,res){
	res.render('landing');
});

router.get('/content', function(req,res){
	res.render('index');
});

router.get('/content/food/gonpachi', function(req,res){
	res.render('food/gonpachi');
});

router.get('/content/food/warayakiya', function(req,res){
	res.render('food/warayakiya');
});

router.get('/content/food/sasagin', function(req,res){
	res.render('food/sasagin');
});

router.get('/content/food/shirube', function(req,res){
	res.render('food/shirube');
});


module.exports = router;