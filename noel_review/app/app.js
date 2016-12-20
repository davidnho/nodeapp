var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('appData', dataFile);

app.locals.siteTitle = "Noel review";


app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/home'));
app.use(require('./routes/about'));
app.use(require('./routes/api'));
app.use(require('./routes/persons'));
app.use(require('./routes/persons_edit'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

