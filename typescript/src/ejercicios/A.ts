// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contar(str:string):number { return str.length} 
console.log(contar("Eliseo")) // 6


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cortar(str:string, num:number){ return str.slice(0, num) }
console.log(cortar("Eliseo Arévalo", 6)) //Elsieo

