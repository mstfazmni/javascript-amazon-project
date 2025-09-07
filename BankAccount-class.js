class BankAccount {
    #balance = 0;

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        if(initialBalance < 0) throw new Error("Initial balance can't be negative");
        this.#balance = initialBalance;
    }
}

const BankAccount = new BankAccount();