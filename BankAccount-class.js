class BankAccount {
    balance = 0;

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        if(initialBalance < 0) throw new Error("Initial balance can't be negative");
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be a positive number");
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("withdraw amount must be a positive number");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        return this.balance;
    }
}

const a = new BankAccount('Mostafa', 100);
console.log(a.balance);
a.deposit(50);
console.log(a.balance);

a.withdraw(75);
console.log(a.balance)