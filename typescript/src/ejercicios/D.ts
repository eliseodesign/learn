// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const esPrimo = (number:number):boolean => {
  return !(number%2 ===0)
}
console.log(esPrimo(1)) // true

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = (number:number):string => {
  return number%2===0?"par":"impar"
}
console.log(parImpar(2))


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function convertirGrados(grados:number, type:string):number{
  if(type.toLocaleLowerCase()==="c") return ((grados * 9/5)+32)
  if(type.toLocaleLowerCase()==="f") return ((grados - 32) * 5/9) 
  return 0
}
console.log(convertirGrados(2,"C"))
