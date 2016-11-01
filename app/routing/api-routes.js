var friendData = require('../data/friends.js');


module.exports = function (app){

    // GET waitlist/
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });  

    // POST tables/
    app.post('/api/friends', function(req, res) {
        var body = req.body;
        friendData.push(body);
        res.json(anything);
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

};//end of module