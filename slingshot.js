
class Slingshot{
    constructor(bodyA,pointB){
     this.pointB=pointB
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.5
    
        }
       this.sling=Constraint.create(options)
      World.add(world,this.sling)


    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    desplay(){
        if(this.sling.bodyA){
     var slingA=this.sling.bodyA.position
     var slingB=this.pointB
        line(slingA.x,slingA.y,slingB.x,slingB.y)
        }



    }
}





