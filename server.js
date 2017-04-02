// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();
function Tron(name, id){
  this.name =name;
  this.id = id;
  this.dead = false;
  this.x = getRandomArbitrary(50,550);
  this.y = getRandomArbitrary(50,550);
  this.velx = 0;
  this.vely = 0;
  this.colour = [getRandomArbitrary(50,250),getRandomArbitrary(50,250),getRandomArbitrary(50,250)];
  this.total = 0;
  this.booster = 1;
  this.angle = 0;
}
var trons=[];
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));


// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {
    console.log("We have a new client: " + socket.id);
    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('firstPing',
      function(data) {
        console.log(data);
        // Data comes in as whatever was sent, including objects
        var newTron = new Tron(data,socket.id);
        trons.push(newTron);
        console.log(trons);
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

        // Send it to all other clients
        io.emit('firstResp', trons);
      }
    );
    socket.on('tronUpdateIn',function(directions){
      // console.log("UPDATING");
      for (var i = 0; i < trons.length; i++) {
        if(trons[i].id === socket.id){
          trons[i].velx = directions.x;
          trons[i].vely = directions.y;
          if(trons[i].velx>0){
            trons[i].rotation=2;
          }else if(trons[i].velx<0){
            trons[i].rotation=4;
          }else if(trons[i].vely>0){
            trons[i].rotation=3;
          }else if(trons[i].vely<0){
              trons[i].rotation=1;
          }
          if(trons[i].total<20){
            trons[i].total++;
          }
        }
        trons[i].x += trons[i].velx*trons[i].booster;
        trons[i].y += trons[i].vely*trons[i].booster;
        for (var j = 0; j < trons.length; j++) {
          if(i!=j){
            var dist = Math.sqrt( Math.pow((trons[i].x-trons[j].x), 2) + Math.pow((trons[i].y-trons[j].y), 2) );
            if(dist<10){
              setTimeout(1000, function() {
                  trons[i].velx = trons[j].velx*2;
                  trons[i].vely = trons[j].vely*2;
                  trons[j].velx = trons[i].velx*2;
                  trons[j].vely = trons[i].vely*2;
              });
              trons[i].velx /=2;
              trons[i].vely /=2;
              trons[j].velx /=2;
              trons[j].vely /=2;
            }
          }
        }
      }
    });
    socket.on('tailDeath',function(tron){
      for (var i = 0; i < trons.length; i++) {
        if(trons[i].id=tron.id){
          trons[i].dead= true;
        }
      }
    })
    socket.emit('callBack',trons);
    socket.on('disconnect', function() {
      for (var i = 0; i < trons.length; i++) {
        if(trons[i].id===socket.id){
          trons.splice(i,1);
        }
      }
      console.log("Client has disconnected");
    });
  }
);
