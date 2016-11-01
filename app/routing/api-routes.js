var friendData = require('../data/friends.js');


module.exports = function (app){

    // GET waitlist/
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });  

    // POST tables/
    app.post('/api/friends', function(req, res) {
        var newUser = req.body;
        var eachUserSum = [];
        var sumDiffTotal = 0;

        for (var i = 0; i < friendData.length; i++){
            var eachUser = friendData[i];

            for(var s=0; s < 10; s++){
                var sumDiff = Math.abs(eachUser.scores[s] - newUser.scores[s])
                sumDiffTotal += sumDiff;
            }
            eachUserSum[i] = sumDiffTotal;

        }

        


        
        
        
        // friendData.push(body);
        res.json(friendData[match]);
    });

};//end of module