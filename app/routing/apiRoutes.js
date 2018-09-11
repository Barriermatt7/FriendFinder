//Load Data

var friends = require("../data/friendsData");

//Routing

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

// API POST Requests
//****Enter compatibility logic for survey reults see readme

app.post("/api/friends", function(req, res) {
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendArray.length; i++){
      var scoresDiff = 0;
    
      for(var f=0; f<newFriendScores.length; f++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[f]) - parseInt(newFriendScores[f])));
      }
    
      scoresArray.push(scoresDiff);
    }

    //compares matches
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    var bm = friendList[bestMatch];
    res.json(bm);

    friendList.push(req.body);
  });
};


    
