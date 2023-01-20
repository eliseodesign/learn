"use strict";
//La principal ventaja de TypeScript es que permite agregar tipos estáticos
// DECLARACIÓN DE VARIABLEL CON TIPO
let isDone = false; // bolean        
let decimal = 6; // Number
let hex = 0xf00d;
let myTypeString = "Hello World"; // String 
// myTypeStrng = 2 // error
// Cambiar tipos de datos daría error en este codigo 
//Dos maneras de Array
let array = [1, 23, 3]; // Array 
let array2 = ["uno", "dos"];
// si quieres tener cualquier tipo de "tipo" en un array
let array3 = [1, "hola", {}];
let tuplaPlayer; // Tuple 
tuplaPlayer = ["a", 2, "true", true]; // como un array pero sabes cuantos y que tipo contiene 
// si asignamos un tipo de datos que no corresponde dará error 
// INFERENCIA DE TIPOS
let numero = 33; // ts infiere el tipo de dato 
let lastName; // string
// UNION 
// podemos unir varios tipos de datos esperados en una variable 
let variable = 3;
variable = "Eliseo";
variable = null;
// Typescript no tiene problema con redefinir el valor de la variable con los tipos de datos esperados 
