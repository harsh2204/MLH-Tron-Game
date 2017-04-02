var song;
var amp;
var wallwidth = 10;
var plsdist = 40;
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;
var hue;

function Light() {
    this.loadSong = function() {
        song = loadSound('error.mp3');
        noStroke();
        colorMode(HSB, 100);
        c1 = color(0, 0, 0);
        //delete this
        hue= 60;
        c2 = color(hue, 100, 100);
        song.play();
        amp = new p5.Amplitude();
    }

    this.setGradient = funtion(x, y, w, h, c1, c2, axis) {
        noFill();
        if (axis == Y_AXIS) { // Top to bottom gradient
            for (var i = y; i <= y + h; i++) {
                var inter = map(i, y, y + h, 0, 1);
                var c = lerpColor(c1, c2, inter);
                stroke(c);
                line(x, i, x + w, i);
            }
        } else if (axis == X_AXIS) { // Left to right gradient
            for (var i = x; i <= x + w; i++) {
                var inter = map(i, x, x + w, 0, 1);
                var c = lerpColor(c1, c2, inter);
                stroke(c);
                line(i, y, i, y + h);
            }
        }
    }

    this.render = function() {
        var vol = amp.getLevel();
        // Foreground
        setGradient(30, 100 , 100, vol * plsdist + wallwidth, c1, c2, Y_AXIS);
        setGradient(100 , 190, vol * plsdist + wallwidth, 30, c2, c1, X_AXIS);
        //image.resize( img,100, ,50, vol * plsdist + wallwidth);
    }

}
