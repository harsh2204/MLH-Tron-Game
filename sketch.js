var gameState; //1-menu, 2-ingame, 3-endgame.
function setup() {
    gameState=0;
    var canv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canv.position(x, y);
}
function draw() {
  
  background(0);
}
