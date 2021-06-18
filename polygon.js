class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
     this.image = loadImage("Polygon.png");
    this.body = Bodies.circle(50,200,20);
World.add(world,this.body);

    }
  
    display() {
      
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y)
      super.display();
    }
  }