class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.2,
            density:1.2,
            friction:0.3
          }
          this.body=Bodies.rectangle(x,y,30,30,options)
          //this.width=width
         // this.height=height
          World.add(world,this.body)
          this.bal=loadImage("download.png")

    }
    display(){
  imageMode(CENTER);
  image(this.bal,this.body.position.x,this.body.position.y,30,30);
    }

}