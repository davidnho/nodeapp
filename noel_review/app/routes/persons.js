var express = require('express');
var router = express.Router();

router.get('/persons', function(req, res) {
  var data = req.app.get('appData');
  var dataPersons = data.persons;
  
  res.render('persons', {
    pageTitle : "Persons",
    persons: dataPersons,
    pageId : "persons"
  });

});

module.exports = router;