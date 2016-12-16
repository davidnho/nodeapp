var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('index', {
    pageTitle : "Index page",
    pageId : "index"
  });

});

module.exports = router;
