class Counter {
    // Property
    startNumber = 0;

    // Constructor

    // Methods
    increment () {
        return this.startNumber + 1;
    }

    decrement () {
        return this.startNumber - 1;
    }

    reset () {
        return this.startNumber = 0;
    }

    value () {
        return this.startNumber;
    }
}

const counter1 = new Counter();

console.log(counter1.increment());
// console.log(counter1.decrement());
console.log(counter1.value());