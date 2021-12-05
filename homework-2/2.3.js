'use strict'
let p = +(prompt("vvedite pervoe chislo"));
    let n = +(prompt("vvedite vtoroe chislo"));
if (p >= 0 && n >= 0){
   console.log(p - n); 
} else if (p < 0 && n < 0){
    console.log(p * n); 
}else if (p < 0 && n >= 0) {
    console.log(p + n); 
}else if  (p >= 0 && n < 0){
    console.log(p + n); 
}
else{
    alert("chto to poshlo ne tak")
};