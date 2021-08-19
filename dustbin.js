class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          restitution : 0.5,
          friction : 0.5,
          density : 0.4
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
  };
  