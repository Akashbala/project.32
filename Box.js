class Box{
  constructor(x,y,width,height){
    var options = {
      isStatic: false
  }
   this.body=Bodies.rectangle(x,y,width,height,options)
   this.width = width;
   this.height = height;
   World.add(world, this.body);
   this.Visiblity = 255;
  }
  desplay(){
    console.log(this.body.speed);
   if(this.body.speed < 3){
    var pos =this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0,0, this.width, this.height)
    pop()
   }
    else{
      World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity)
     pop()
    }
  }
  score(){
    if(this.Visiblity<0&&this.Visiblity>-1000){
      score++
    }
  }
}
