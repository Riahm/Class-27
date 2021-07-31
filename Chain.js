class Chain {
    constructor(bodyA,pointB){

        var options = {
         bodyA : bodyA,
         pointB : pointB,
         stiffness : 0.05,
         length : 10
        }
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    display() {
var pointA = this.body.bodyA.position
var pointB = this.body.pointB

line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}