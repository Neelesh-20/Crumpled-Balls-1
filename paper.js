class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          restitution : 0.6,
          friction : 0.5,
          density : 0.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(200, 200, 30, 30);
      pop();
    }
  };
  