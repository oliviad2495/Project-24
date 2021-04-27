class Iron{
    constructor(x,y){

        var options={
            restitution: 0.8,
            friction: 0.9,
            density: 12
        }

        this.body = Bodies.rectangle(x,y,30,50);
        this.width= 30;
        this.height = 50;
        World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    fill('orange')
    rectMode(CENTER)
    fill("black")
    rect(0, 0, this.width, this.height);
    pop();
  };
    }