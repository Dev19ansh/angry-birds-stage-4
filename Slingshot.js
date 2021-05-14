class Slingshot{
    constructor(a,b){
        var options = {
            bodyA : a,
            pointB:b,
            length:50,
            stiffness:0.3
        }
        this.pointB=b;
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }

    fly(){
        this.body.bodyA=null;
    }

    display(){
        if(this.body.bodyA){
            stroke("black");
            strokeWeight(4);
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
       
    }
}

//line(x1,y1,x2,y2) x1=bodyax



//To create constraint - Constraint.create()a