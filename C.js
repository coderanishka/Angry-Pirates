class C {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.5,
            lenth:50
        }
      this.body=Constraint.create(options);
      World.add(world,this.body);  
    }
    display(){
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position; 
         strokeWeight(4);
         stroke("purple");
         line(posA.x,posA.y,posB.x,posB.y);
    }
}