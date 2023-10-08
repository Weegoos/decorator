console.log("-------------------------");
class Vehicle {
    travelTime(){
        return this.timeTaken + " минут"
    }
}

class Bus extends Vehicle {
    constructor(){
        super()
        this.timeTaken = "На автобусе " + 20
    }
}

class Taxi extends Vehicle {
    constructor(){
        super()
        this.timeTaken = "На такси " + 15
    }
}

class Car extends Vehicle {
    constructor(){
        super()
        this.timeTaken = "На машине " + 10
    }
}

class Walk extends Vehicle {
    constructor(){
        super()
        this.timeTaken = "Пешком " + 40
    }
}

class Commute{
    travel(transport){
        return transport.travelTime()
    }
}

const commute = new Commute()
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
console.log(commute.travel(new Walk()));



