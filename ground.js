class Ground {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
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
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    };
    