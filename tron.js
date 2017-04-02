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
    if(this.rotation<=90){
      translate(this.x+8,this.y+18);
    }else{
      translate(this.x+16,this.y+36);
    }
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
