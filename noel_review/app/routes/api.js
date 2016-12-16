var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');


router.get('/api', function(req, res) {
  var data = req.app.get('appData');
  console.log(data);
  res.json(data);
  
});

module.exports = router;


