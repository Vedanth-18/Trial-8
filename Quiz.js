class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    background(BGI);
    question.hide();
    Contestant.getPlayerInfo();
    for(var plr in allContestants){
        var correctAns = "1";
        var wrongAns = "2";
        textSize(20);
        noStroke();
        fill("Aquamarine");
        if(allContestants[plr].answer === "1"){
          var right = allContestants[plr].name; 
          text("The correct answer is given by : " + right, 20, 135);
          text("The Correct answer is..", 50, 175);
          text("1- 'Graphic Interchange Format'", 55, 195);
        } 
        /*if(allContestants[plr].answer !== "1"){
          text("Oops!! No one gave thecorrect answer : 'Graphic Interchange Format'", 20, 135);
          
        }*/
    }
  }
}