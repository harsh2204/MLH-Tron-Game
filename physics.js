function Physics() {
    var d, dd;

    function collision(tron1, tron2) {
        d = dist(tron1.pos.x, tron2.pos.x, tron1.pos.y, tron2.pos.y);
        if (d < 10) {
            //set the velocity of the object
            setTimeout(1000, function() {
                tron1.setVel(tron2.vel.y * 2, tron2.vel.x * 2);
                tron2.setVel(tron1.vel.y * 2, tron2.vel.x * 2);
            });
            // tron1.setVel/=2;
            // tron2.setVel /=2;
        } else {
            for (i = 0; i < tron1.tail[i]; i++) {
                d = dist(tron2.pos.x, tron1.tail[i].pos.x, tron2.pos.y, tron1.tail[i].pos.y);
                if (d < (10)) {
                    //tron2 dies
                    dd = true;
                    tron2.dead = true;
                }
            }
            if (dd == false) {
                for (i = 0; i < tron1.tail[i]; i++) {
                    d = dist(tron2.pos.x, tron1.tail[i].pos.x, tron2.pos.y, tron1.tail[i].pos.y);
                    if (d < (10)) {
                        tron1.dead = true;
                    }
                }
            }
        }
    }
}

function wall(tron) {
    if (tron.pos.x < 0 || tron.pos.x > width || tron.pos.y < 0 || tron.pos.y > height) {
        tron.dead = true;
    }
}

//
// function items(tron, item) {
//     var itemsRadius = item.getRadius();
//     var tronRadius = pos.x + 10;
//     var d = dist(tron1.pos.x, tron2.pos.x, item.pos.y, item.pos.y);
//     if (distance < tronRadius + itemsRadius) {
//         //add something here
//     }
// }



}
