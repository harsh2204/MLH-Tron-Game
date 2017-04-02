function Physics() {

    function collision(tron1, tron2) {

        var radius = tron1.pos.x + 10;
        var d = dist(tron1.pos.x,tron2.pos.x,tron1.pos.y,tron2.pos.y);

        if (d < ((radius*2))+5) {
          //set the velocity of the object
         tron1.setVel();
         tron2.setVel();
        }

        for(i = 0 ; i< tron1.tail[i]; i++){
          var d2 = dist(tron2.pos.x,tron1.tail[i].pos.x,tron2.pos.y,tron1.tail[i].pos.y);
        if (d2 < (radius+20)){
        //tron2 dies
        }
}
    }


    function items(tron,item){
     var itemsRadius = item.getRadius();
     var tronRadius = pos.x +10;
     var d = dist(tron1.pos.x,tron2.pos.x,item.pos.y,item.pos.y);
     if(distance < tronRadius + itemsRadius){
       //add something here
     }
    }



}
