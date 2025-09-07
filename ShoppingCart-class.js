class ShoppingCart {
    //Properties
    items = [];

    // Constroctor which is setup code
    constructor() {
        this.items = [];
    }

    // Mehtods
    AddItem(name, price, quantity = 1) {
        const existing = this.items.find(i => i.name === name);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({name, price, quantity});
        }

        return this.items;
    }

    RemoveItem(name) {
        const idx = this.items.findIndex(i => i.name === name)
        if(idx === -1) return false;
        this.items.splice(idx, 1);
        return this.items;
    }

    CalculateTotal() {
        const sum = this.items.reduce((acc, item) => acc + item.quantity * item.price , 0);
        return Math.round(sum * 100) / 100;
    }

    ClearCart() {
        this.items = [];
    }
}

const cart1 = new ShoppingCart();

cart1.AddItem("Apple", 14, 2);
cart1.AddItem("Banana", 11, 5);
cart1.AddItem("Peanuts", 4, 15);


// cart1.RemoveItem("Banana");
console.log("Total:", cart1.CalculateTotal());
