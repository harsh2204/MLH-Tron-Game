var gameState; //1-menu, 2-ingame, 3-endgame.
function setup() {
    gameState=1;
    var menu = new Menu();
    var game = new Game();
    var canv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canv.position(x, y);
}
function draw() {
  background(0);
  if(gameState===1){
    menu.render();
  }
  if(gameState===2){
    game.render();
  }
}
