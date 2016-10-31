// need path package
var path = require('path');

module.exports = function (app){
    // set up routes

    // /survey
    app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // /home -- test for USE working
    app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

};//end of module