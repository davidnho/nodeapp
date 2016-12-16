var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('home', {
    pageTitle : "Welcome to My Page",
    pageId : "index"
  });

});

module.exports = router;
