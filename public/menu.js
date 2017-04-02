function Menu() {
    var img;
    Menu.prototype.preload = function() {
        img = loadImage("title.png");
        console.log(img);
    }
    Menu.prototype.setup = function() {
        document.querySelector("username");
    }
    Menu.prototype.render = function() {
        image(img, width / 2 - 160, 80);
        fill(150, 155, 210);
        rect(width / 2 - 60, 390, 120, 50);
        fill(255);
        textSize(40);
        text("Play", width / 2 - 40, 430);
    }
}
