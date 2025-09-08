class Car {
    // Porperty
    brand;
    model;
    speed = 0;
    isTrunkOpen = true;

    // Constructor
    constructor(brand, model) {
        this.brand = brand;
        this.model = model
    }

    // Methods
    displayInfo () {
        console.log(`${this.brand} ${this.model} Speed: ${this.speed} km/h, Trunk is open: ${this.isTrunkOpen}`);
    }

    go () {
        if (this.isTrunkOpen) {
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

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");



// car2.displayInfo();

car1.closeTrunk()

car1.go();
car1.go();
car1.go();

car1.brake();


car1.openTrunk()

console.log(car1);
car1.displayInfo();
// console.log(car2);
