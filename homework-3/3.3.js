'use strict'
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
function sellary(product) {
    let productprise = product.price;
   let sellaryprice = productprise / 100 * 85;

    console.log("Cena so skidkoy na tovar sostavlyaet " +sellaryprice +" rublei");
}

products.forEach(sellary);
