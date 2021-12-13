'use strict'
class product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    show(){
        console.log(this.name, this.price);
    }
}

class make25PercentDiscount extends product{
constructor ( name, price){
super(name, price);
}
discount(){
    this.price = this.price / 100 * 75;
    console.log(this.name, this.price);
}
}
let product1 = new make25PercentDiscount("product1", 150);
let product2 = new make25PercentDiscount("product2", 260)
let product3 = new product("product3", 350)
product1.show();
product1.discount();
product2.show();
product2.discount();
product3.show();
