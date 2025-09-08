class Car {
    // Porperty
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    // Constructor
    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model
    }

    // Methods
    displayInfo () {
        console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/h, Trunk is open: ${this.isTrunkOpen}`);
    }

    go () {
        if (!this.isTrunkOpen) {
            return "car cannot be moved cuz trunk is open!"
        }
        this.speed += 5;

        if (this.speed > 200) {
            this.speed = 200;
        }
    }

    brake () {
        this.speed -= 5;

        if(this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk () {
        if (this.speed > 0) {
            return "Car is moving trunk cannot be opend!";
        }
        this.isTrunkOpen = true;
    }
   
    closeTrunk () {
        this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go () {
        this.speed += this.acceleration;

        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    openTrunk() {
        console.log('Race cars do not have a trunk.');
    }

    closeTrunk() {
        console.log('Race cars do not have a trunk.');
    }
}

const car1 = new Car({
    brand: "Toyota",
    model: "Corolla"
});

const car2 = new Car({
    brand: "Tesla",
    model: "#model 4"
});

const raceCar1 = new RaceCar({
    brand: "McLaren",
    model: "F1",
    acceleration: 20
})

raceCar1.openTrunk()
raceCar1.go()
raceCar1.go()
raceCar1.brake()
raceCar1.displayInfo();

// car1.closeTrunk()

// car1.go();
// car1.go();
// car1.go();

// car1.brake();


// car1.openTrunk()

// console.log(car1);
// car1.displayInfo();
// console.log(car2);
