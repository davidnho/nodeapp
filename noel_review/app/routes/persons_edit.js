var express = require('express');
var router = express.Router();

router.get('/persons/edit', function(req, res) {
  var data = req.app.get('appData');
  var dataPersons = data.persons;
  
  res.render('persons_edit', {
    pageTitle : "Edit Person",
    persons: dataPersons,
    pageId : "persons_edit"
  });

});

module.exports = router;