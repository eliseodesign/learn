// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const random = ():number => { return Math.round( Math.random()* 100 + 500 )}     
console.log(random())


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (str:number):boolean => str.toString().split("").reverse().join("") === str.toString()
console.log(capicua(2002)) // true

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


const factorial = (n:number):any => {
  if(n<0) return -1
  if(n==0) return 1
  else return (n * factorial(n-1))
}

console.log(factorial(5))




const binary = (n:number):any => {
  if(n==1) return [0,1]
  else return (n/2)
}


