var express = require('express');
var router = express.Router();
const path = require('path');
const partial = path.join(__dirname,"../partial/header");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
