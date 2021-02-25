// OO Challenge

// Part One -- Create a class for vehicle.  
// Each vehicle instance should have the following properties:
// make
// model
// year

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

const myFirstVehicle = new Vehicle("Chevrolet", "S-10", 2001);

// Part Two -- Create a class for a car.  The Car class should inherit from Vehicle and each
// car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year); 
        this.numWheels = 4;
    }
}

const myFirstCar = new Car("Toyota", "Corolla", 2005);

// Part Three -- Create a class for a Motorcycle. This class should inherit from Vehicle
// and each motorcycle instance should have a property called numWheels which has a value of 2.
// It should also have a revEngine method which returns "VROOM!"

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

const myFirstMotorcycle = new Motorcycle("Ducati", "Monster", 2006);

// Part Four -- Create a class for a Garage. It should have a property called vehicles
// which will store an array of vehicles, and a property called capactiy which is a number
// indicating how many vehicles will fit in the garage. When you create a garage, vehicles 
// will always be empty; you only need to provide the capacity. 

class Garage {
    constructor(capacity) {
        this.vehicles = [],
        this.capacity = capacity;
    }
    

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        else {
            this.vehicles.push(newVehicle);
            return "Vehicle added!";
        }
        
    }

}