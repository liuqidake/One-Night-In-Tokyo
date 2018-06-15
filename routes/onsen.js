const express = require("express");
var router = express.Router();

router.get("/content/onsen/niwanoyu", function(req,res){
	res.render("onsen/niwanoyu");
});

router.get("/content/onsen/tokyosomeionsensakura", function(req,res){
	res.render("onsen/tokyosomeionsensakura");
});

router.get("/content/onsen/spalaqua", function(req,res){
	res.render("onsen/spalaqua");
});

router.get("/content/onsen/timessparesta", function(req,res){
	res.render("onsen/timessparesta");
});

module.exports = router;