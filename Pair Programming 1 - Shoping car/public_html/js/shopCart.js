var cart = [];

var Fruit = function (quantity, type, price) {
    this.quantity = quantity,
            this.type = type,
            this.price = price;
};

Fruit.prototype.quantityPricing = function () {
    return this.quantity * this.price;
};

function menu() {
    do {
        var option = prompt("1. Nueva fruta \n 2. Show \n Elige una de las dos opciones");
        if (option === 1) {
            var quantity = prompt("Cantidad: ");
            var type = prompt("Tipo de fruta: ");
            var price = prompt("Precio: ");
            addToShoppingCart(quantity, type, price);
        }
    } while (option === 1);
    show();
}

function addToShoppingCart(quantity, type, price) {
    var fruit = new Fruit(quantity, type, price);
    cart.push(fruit);
}

function show() {
    cart.reduce(function (memo, fruit) {
        return memo + fruit.quantityPricing;
    }, 0);
}