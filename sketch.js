var circle = {
    x: 400,
    y: 300,
    dia: 100,
};
var vel = {
    x: 7,
    y: -4
};
var col = 0;
var col2 = 0;
var col3 = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    col = map(circle.x, 0, width, 0, 255);
    col2 = map(circle.x, 0, width, 255, 0);
    col3 = map(circle.x, 0, width, 200, 50);
    background(col);
    fill(col);

    stroke(col, col2, col3);
    strokeWeight(4);
    ellipse(circle.x, circle.y, circle.dia, circle.dia);
    bounce();
}

function bounce() {
    if (circle.x+50 > width || circle.x-50 < 0) {
        vel.x *= -1
    }
    circle.x += vel.x;
    if (circle.y+50 > height || circle.y-50 < 0) {
        vel.y *= -1
    }
    circle.y += vel.y;
}
