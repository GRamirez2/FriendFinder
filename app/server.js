var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemon = require('nodemon');

// CREATE SERVER
var app = express();
var PORT = process.env.PORT || 3000;

// json parser and stringify
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ROUTER
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// START SERVER
app.listen(PORT, function() {
  console.log('express on port ' + PORT);
});