class Chain{
    constructor(ABody,BBody){
        var options={
            bodyA:ABody,
            bodyB:BBody,
            stiffness:0.05,
            length:10
        }

        this.chain  = Constraint.create(options);
        World.add(world, this.chain)

 
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(3)
        stroke("black")
        line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
}