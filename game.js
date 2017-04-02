var tron;
function Game(){
  tron = new Tron("Harsh");
  tron.loadAssets();
  tron.pos = createVector(200,200);
  tron.colour= color(215,200,100);
  Game.prototype.render = function(){
    tron.makeTrails();
    tron.show();
  }
  Game.prototype.turn = function(direction){
    //1-up, 2-down, 3-right, 4-
    // angleMode(DEGREES);
    if(direction===1){
      tron.vel.y=-5;
      tron.vel.x=0;
      tron.rotation=0;
    }
    if(direction===2){
      tron.vel.y=5;
      tron.vel.x=0;
      tron.rotation=PI;
    }
    if(direction===3){
      tron.vel.x=5;
      tron.vel.y=0;
      tron.rotation=HALF_PI;
    }
    if(direction===4){
      tron.vel.x=-5;
      tron.vel.y=0;
      tron.rotation=(3*(PI))/2;
    }
  }
  Game.prototype.update = function(){
    //update the current trons
    if(tron.total<10){
      tron.total++;
    }
    tron.update();
  }
  Game.prototype.send = function(){
    //send the direction change

  }
}
