class Car {
    // Porperty
    brand;
    model;
    speed = 0;

    // Constructor
    constructor(brand, model) {
        this.brand = brand;
        this.model = model
    }

    // Methods
    displayInfo () {
        console.log(`${this.brand} ${this.model} Speed: ${this.speed} km/h`);
    }

    go () {
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
}

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");


car1.displayInfo();
car2.displayInfo();

car1.go();
car1.go();
car1.go();

car1.brake();

console.log(car1);
// console.log(car2);
