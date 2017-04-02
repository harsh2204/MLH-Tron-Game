var tron;
function Game(){
  tron = new Tron("Harsh");
  tron.loadAssets();
  tron.x=200;
  tron.y=200;
  tron.colour= color(215,200,100);
  Game.prototype.render = function(){
    tron.show();
  }
  Game.prototype.turn = function(direction){
    //1-up, 2-down, 3-right, 4-
    angleMode(DEGREES);
    if(direction===1){

      tron.rotation=0;
    }
    if(direction===2){
      tron.rotation=180;
    }
    if(direction===3){
      tron.rotation=90;
    }
    if(direction===4){
      tron.rotation=270;
    }
  }
  Game.prototype.update = function(){
    //update the current trons

  }
  Game.prototype.send = function(){
    //send the direction change

  }
}
