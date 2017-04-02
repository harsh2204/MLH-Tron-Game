var trons = [];

function Game() {
    socket = io.connect('http://localhost:3000');
    var tron = new Tron("Harsh");
    tron.loadAssets();
    trons.push(tron);
    socket.emit('firstPing', tron.name);
    Game.prototype.render = function() {
        for (var i = 0; i < trons.length; i++) {
            trons[i].makeTrails();
            trons[i].show();

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

        for (var i = 0; i < trons.length; i++) {
            //query trons from data
            trons[i].update(data);
        }
    }
    socket.on('callBack', function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === socket.id) {
                trons[0].pos = createVector(data[i].x, data[i].y);
                tron[0].colour = color(data[i].colour[0], data[i].colour[1], data[i].colour[2]);
            }else{
                trons[i].update(data);
            }
        }
    });
    Game.prototype.send = function() {
        //send the direction change
        var directions = {
            x: this.velx,
            y: this.vely
        };
        socket.emit('tronUpdateIn', directions);
    }
}
