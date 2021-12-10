'use strict'
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let prodphoto = products.filter(function (product) {
    if (product.photos){
        let photoarr = product.photos;
        return photoarr.length >= 1;
    }   
});
console.log(prodphoto);

products.sort(function (price1, price2) {
    if(price1.price > price2.price) {
        return 1;
    }
    if(price2.price > price1.price) {
        return -1;
    }
});
console.log(products);

