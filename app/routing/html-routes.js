// set up routes
// /home -- test for USE working
app.use('/', function(req, res) {
// res.sendFile(path.join(__dirname, 'home.html'));
res.send("USE working")
  });

// /survey
app.get('/survey', function(req, res) {
res.sendFile(path.join(__dirname, 'survey.html'));
  });