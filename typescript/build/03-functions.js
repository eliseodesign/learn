"use strict";
// Funcion que recibe argumento any y void indica que no retorna nada 
function clg(str) {
    console.log(str);
}
clg("nanan"); // nanan
// función que no recibe argumentos :number indica que debe returnar un numero
function NumRandom() {
    return Math.floor(Math.random() * 1000);
}
clg(NumRandom());
// --- 
function printPotition(position) {
    console.log(`Latitud es: ${position.lat}... Longitud es ${position.log}`);
}
printPotition({ lat: 21, log: 92 });
