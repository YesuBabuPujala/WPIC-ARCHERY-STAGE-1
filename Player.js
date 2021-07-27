class Player {
    constructer(x, y) {
        var options = {
            restitution: 0,
      friction: 0 ,
      density: 0,
      isStatic: true
        }

        this.Player.png = loadImage("./assets/player.png");
        World.add(world, this.body);
    }
}