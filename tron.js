function Tron(name){
  this.pos = p5.Vector();
  this.colour;
  this.dead;
  this.id;
  this.name=name;
  this.tails =[];
  this.tail={
    x,
    y
  };
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
    
  }

}
