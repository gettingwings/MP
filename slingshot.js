class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 5
          }
        
          this.sling = Matter.Constraint.create(options);
          Matter.World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;
        line(posA.x, posA.y, posB.x, posB.y);
        point(posB.x, posB.y);
        }
    }
}