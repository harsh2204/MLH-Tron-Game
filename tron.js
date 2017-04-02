var tail = {
  x:0,
  y:0
};
function Tron(name){
  this.pos = p5.Vector();
  this.colour;
  this.dead;
  this.id;
  this.name=name;
  this.tails =[];
  this.rotation=0;
  Tron.prototype.loadAssets = function(){
     img = loadImage("assets/spaceship-sprite.png");
  }
  Tron.prototype.makeTron = function(data){
    //data{
    // x:
    // y:
    // colour:
    // id:
  // }
    this.pos.x = data.x;
    this.pos.y = data.y;
    this.colour = data.colour;
    this.id = data.id;
    this.dead = false;
  }
  Tron.prototype.show= function(){
    translate(this.x+18,this.y+8);
    rotate(this.rotation);
    fill(this.colour);
    ellipse(8,22,10,18);
    image(img, 0,0);
  }
  Tron.prototype.update= function(){

  }
  Tron.prototype.makeTrails= function(){

  }

}
