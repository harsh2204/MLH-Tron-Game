function tail(x, y) {
      this.x = x;
      this.y = y;
  }
function Tron(name) {
    this.pos = p5.Vector();
    this.colour;
    this.dead;
    this.id;
    this.name = name;
    this.tails = [];
    this.rotation = 0;
    this.vel = createVector(0,0);
    this.img;
    this.total = 0;
    Tron.prototype.loadAssets = function() {
        this.img = loadImage("assets/spaceship-sprite.png");
    }
    Tron.prototype.makeTron = function(data) {
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
    Tron.prototype.show = function() {
        if (this.rotation == 0) {
            translate(this.pos.x-5, this.pos.y-36);
        } else if (this.rotation== HALF_PI){
            translate(this.pos.x + 40, this.pos.y-6);

        } else if (this.rotation == PI){
            translate(this.pos.x + 11, this.pos.y + 40);

        } else{
            translate(this.pos.x -36, this.pos.y +10);
        }
        rotate(this.rotation);
        fill(this.colour);
        ellipse(8, 22, 10, 18);
        image(this.img, 0, 0);
    }
    Tron.prototype.update = function(data) {
      //take this out when puting in server \/
      // if(this.pos!=='undefined'&&this.vel!=='undefined'){
      //   this.pos.add(this.vel);
      // }
      //uncomment when puting server
        if(!this.dead){
          this.pos.x = data.x;
          this.pos.y = data.y;
          this.vel.x = data.velx;
          this.vel.y = data.vely;
          this.dead = data.dead;
        }
    }
    Tron.prototype.makeTrails = function() {
      noStroke();
      if (this.total === this.tails.length) {
           for (var i = 0; i < this.tails.length - 1; i++) {
               this.tails[i] = this.tails[i + 1];
           }
       }
       this.tails[this.total - 1] = new tail(this.pos.x, this.pos.y);

        // if (this.tails.length <= 10) {
        //     this.tails.push(new tail(this.pos.x, this.pos.y));
        //     // console.log(this.tails.length);
        //     }
        //     else {
        //       this.tails.shift();
        //       // console.log(this.tails.length);
        //     }


            var col = this.colour.levels;
            col[3] = 255;
            // fill(c);s
            for (var i = this.tails.length - 1; i >= 0; i--) {
                col[3] *= 0.9;
                  fill(col[0], col[1], col[2], col[3]);
                  rect(this.tails[i].x, this.tails[i].y, 5, 5);
            }
        }
    }
