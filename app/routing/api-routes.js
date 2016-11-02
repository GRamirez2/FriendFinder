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
            //console.log(newUser.scores)

            for(var s=0; s < 10; s++){
                var sumDiff = Math.abs(eachUser.scores[s] - newUser.scores[s])
                sumDiffTotal += sumDiff;
            }
            // eachUserSum[i] = sumDiffTotal;
            eachUserSum.push(sumDiffTotal)
            sumDiffTotal=0;
            //console.log("sumDiffTotal"+sumDiffTotal)
            //console.log("eachUserSum arr= "+eachUserSum);

        }

        var lowestScore = eachUserSum[0];
        var winnerIndex = 0;
        //console.log("var lowerScore ="+lowestScore)
        //console.log(eachUserSum.length)
        //console.log(friendData.length)
        //console.log(eachUserSum)

        for(var i=0; i < eachUserSum.length; i++){
            //console.log("in loop")
            if(eachUserSum[i] < lowestScore){
                lowestScore = eachUserSum[i];
                winnerIndex = [i];
                //console.log("in loop lowestScore = "+lowestScore)
                //console.log("in loop winnerIndex = "+winnerIndex)
            }
        } 
        
        friendData.push(newUser);
        res.json(friendData[winnerIndex]);
        //console.log("i = "+[i])
        //console.log("var winnerIndex = "+winnerIndex)
        //console.log("var lowerScore bottom ="+lowestScore)
    });

};//end of module