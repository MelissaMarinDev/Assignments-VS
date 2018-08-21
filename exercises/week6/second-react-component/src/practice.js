class Vehicle{
    constructor(args){
        this.make = args.make;
        this.model = args.model;
    }
    drive(){
        console.log("vroom");
    }
}

class MotorCycle extends Vehicle {
    constructor(args){
        super(args)
        this.hasSideCar = args.hasSideCar;
    }
}

var motorCycle = new MotorCycle({make:"Honda", model: "Shadow", hasSideCar:false});

console.log(motorCycle.hasSideCar);
motorCycle.drive()