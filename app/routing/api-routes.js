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
            //console.log(eachUser)
            //console.log(eachUser.scores)

            for(var s=0; s < 10; s++){
                var sumDiff = Math.abs(eachUser.scores[s] - newUser.scores[s])
                sumDiffTotal += sumDiff;
            }
            eachUserSum[i] = sumDiffTotal;
            //console.log(eachUserSum)

        }

        var lowestScore = eachUserSum[0];
        var winnerIndex = 0;
        //console.log(lowestScore)

        for(var i=0; i<eachUserSum.length; i++){
            if(eachUserSum[i] < lowestScore){
                lowestScore = eachUserSum[i];
                winnerIndex = i;
            }
        } 
        
        friendData.push(newUser);
        res.json(friendData[winnerIndex]);
        console.log(i)
    });

};//end of module