class ShoppingCart {
    //Properties
    name;
    price;
    quantity;

    // Constroctor which is setup code
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Mehtods
    AddItem() {

    }

    RemoveItem() {

    }

    CalculateTotal() {

    }

    ClearCart() {

    }
}

const cart = new ShoppingCart("Apple", 20, 3);
console.log(cart);