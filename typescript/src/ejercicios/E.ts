
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
/**
 * @toBinary función para pasar de decimal a binario 
 * @toDecimal funcion pasar de binario a decimal
 * @divInt función que retorna objeto con el cociente y resultado entero de div
 */

const divInt = (a:number, b:number):any => ([~~(a/b), a%b])


function toBinary(number:number):string{
  if(number ===0) return "0"
  let binary:number[] = [] 
  while(number > 0){ 
    const [int, rem] = divInt(number, 2)
    binary = [...binary, rem]
    number = int
  }
  return binary.reverse().join("")
}

console.log(toBinary(13))


function toDecimal(number:number ){
  const lab:string = number.toString().split("").reverse().join("")

  let value = 1
  let decimal = 0
  for(let i = 0; i < lab.length; i++){
    if(Number(lab[i]) === 1) decimal += Number(lab[i]) * value
    value *= 2
  }
  return decimal
}


console.log(toDecimal(1101))