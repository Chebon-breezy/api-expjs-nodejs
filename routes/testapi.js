var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

router.get("/", function(req,res,next) {

    res.send("API is working properly");
});

module.exports= router;