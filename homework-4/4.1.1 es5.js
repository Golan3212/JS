'use strict'
function product(name, price) {
    this.name = name;
    this.price = price;
    
}
product.prototype.show = function () {
    console.log(this.name, this.price);
}


function make25PercentDiscount(name, price) {
    product.call(this, name, price);
}

make25PercentDiscount.prototype = Object.create(product.prototype);
make25PercentDiscount.prototype.constructor = make25PercentDiscount;

make25PercentDiscount.prototype.discount = function () {
    this.price = this.price / 100 * 75;
    console.log(this.name, this.price);
};
let product1 = new make25PercentDiscount("product1", 150);
let product2 = new make25PercentDiscount("product2", 260)
let product3 = new product("product3", 350)
product1.show();
product1.discount();
product2.show();
product2.discount();
product3.show();
