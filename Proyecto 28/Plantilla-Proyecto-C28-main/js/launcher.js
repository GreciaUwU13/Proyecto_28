class launcher{ //cadena, ahora se ancla uno de los objetos que estan restringidos 
    constructor(bodyA, pointB){
        var options = { 
            bodyA: bodyA, 
            pointB: pointB, //se elimina esa reestriccion 
            stiffness: 0.04,
            length: 10
        } 
        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){ 
        if(this.launch.bodyA){

        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4); 
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    //mousePresd, mouseDraw
}




/*class launcher {
    constructor(){
        fly (){
            this.launcher.bodyA = null;
        }
    }
}*/