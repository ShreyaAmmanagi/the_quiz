var canvas;
var database;
var player,contestantCount;
var quest,allPlayers;
var option = 0
var Qiuz;
var gameState = 0;
function setup(){
  database = firebase.database()
  canvas = createCanvas(850,400);
  Qiuz = new quiz()
  Qiuz.getState()
  Qiuz.start();
}


function draw(){
  background("pink");
  if(contestantCount == 4){
    Qiuz.update(1)
    //gameState = 1
  }
  if(gameState == 1){
    Qiuz.play()
  }
}
