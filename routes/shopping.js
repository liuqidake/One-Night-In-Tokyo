const express = require('express');
var router = express.Router();

router.get('/content/shopping/ginza', function(req,res){
    res.render('shopping/ginza');
});

router.get('/content/shopping/asakusa', function(req,res){
    res.render('shopping/asakusa');
});

router.get('/content/shopping/shibuya', function(req,res){
    res.render('shopping/shibuya');
});

router.get('/content/shopping/shimokitazawa', function(req,res){
    res.render('shopping/shimokitazawa');
});

module.exports = router;