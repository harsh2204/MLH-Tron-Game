var trons = [];
var tronIDs = [];
function Game() {
    socket = io.connect('http://localhost:3000');
    var tron = new Tron("Harsh");
    var img = loadImage("assets/spaceship-sprite.png");
    socket.emit('firstPing', tron.name);
    socket.on('firstResp',function(data){
      for (var i = 0; i < data.length; i++) {
        if(data[i].id===socket.id){
          console.log(data);
          tron.makeTron(data[i]);
          tronIDs.push(data[i].id);
          trons.push(tron);
        }else if(!tronIDs.includes(data[i].id)){
          var temp = new Tron(data[i].name);
          temp.makeTron(data[i]);
          tronIDs.push(data[i].id);
          trons.push(temp);
        }
      }
    });
    Game.prototype.render = function() {
      // console.log(socket.id);
        for (var i = 0; i < trons.length; i++) {
            trons[i].makeTrails();
            trons[i].show(img);

        }
    }
    Game.prototype.turn = function(direction) {
        //1-up, 2-down, 3-right, 4-
        // angleMode(DEGREES);
        if (direction === 1) {
            // tron.vel.y=-5;
            // tron.vel.x=0;
            tron.rotation = 0;
        }
        if (direction === 2) {
            // tron.vel.y=5;
            // tron.vel.x=0;
            tron.rotation = PI;
        }
        if (direction === 3) {
            // tron.vel.x=5;
            // tron.vel.y=0;
            tron.rotation = HALF_PI;
        }
        if (direction === 4) {
            // tron.vel.x=-5;
            // tron.vel.y=0;
            tron.rotation = (3 * (PI)) / 2;
        }
    }
    Game.prototype.update = function() {
        //update the current trons
        // if(tron.total<10){
        //   tron.total++;
        // }
        if(trons.length<Object.keys(io.sockets.sockets).length){
          socket.on('callBack', function(data) {
          for (var i = 0; i < trons.length; i++) {
            //query trons from data
                  trons[i].update(data[tronIDs.indexOf(trons[i].id)]);
          }
        });
        }
    }

    Game.prototype.send = function() {
        //send the direction change
        var directions = {
            x: this.velx,
            y: this.vely
        };
        socket.emit('tronUpdateIn', directions);
    }
}
