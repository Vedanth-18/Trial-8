//namespaces
var canvas, sound;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var Bg;

var question, contestant, quiz;

function preload(){
  //images and sounds
  BGI = loadImage("img.jpg");
  sound = loadSound("sound.mp3");
}

function setup(){
  canvas = createCanvas(850,400);

  //introduce obj database to firebase
  database = firebase.database();

  //new quiz and contestants
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  contestant = new Contestant();
}


function draw(){
  background(BGI);
  //sound loop
  //sound.loop();

  //updating quiz
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
