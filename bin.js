class Bin {
    constructor(x, y,width,height) {
        var options = {
          isStactic :true,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);

        fill("red");

        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    
      }
    
};