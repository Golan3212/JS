'use strict'
function summ (h, v) {
    return h + v;
}
 console.log(summ(3, 5));

 function multiply(h, v) {
     return h * v;
 }
 console.log(multiply(3, 5));

 function divide(h, v) {
    return h / v;
}
console.log(divide(3, 5));

function subtract(h, v) {
    return h - v;
}
console.log(subtract(3, 5));

let arg1 = +prompt("vvedite pervoe chislo");
let arg2 = +prompt("vvedite vtoroe chislo");
let operation = prompt("which operation? (summ, multiply, divide, subtract)");
function mathOperation(arg1, arg2, operation){
switch(operation) {
    case "summ":
     return summ(arg1, arg2);
    case "multiply":
        return multiply(arg1, arg2);
    case "divide":
        return divide(arg1, arg2);
    case "subtract":
        return subtract(arg1, arg2);
        default:
            throw "invalid operation" +operation;
}
}
console.log(mathOperation(arg1, arg2, operation));
alert(mathOperation(arg1, arg2, operation));