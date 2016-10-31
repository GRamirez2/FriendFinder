 // GET waitlist/
  app.get('/api/friends', function(req, res) {
    res.json(waitlist);
  });  

  // POST tables/
  app.post('/api/friends', function(req, res) {
    var body = req.body;
    // This requires new logic
    // if (tables.length < 5) {
    //   tables.push(body);
    //   res.send(true);
    // } else {
    //   waitlist.push(body);
    //   res.send(false);
    // }
    
    // res.json(body);
  });