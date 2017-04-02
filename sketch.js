var gameState; //1-menu, 2-ingame, 3-endgame.
var menu;
var game;
var physics
function setup() {
    physics=new Physics();
    gameState=2;
    menu = new Menu();
    game = new Game();
    var canv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canv.position(x, y);
     x=constrain(x,-2,602)
   y=constrain(y,-2,602)
}
function draw() {
  background(0);
  if(gameState===1){

    menu.render();
    noLoop();
  }
  if(gameState===2){
    game.update();
    game.render();
    game.send();
  }
physics.wall(tron);
  // Physics.collision;
}
function keyPressed(){
  if(keyCode==38){
    game.turn(1);
  }
  if(keyCode==40){
    game.turn(2);
  }
  if(keyCode==39){
    game.turn(3);
  }
  if(keyCode==37){
    game.turn(4);
  }
}
