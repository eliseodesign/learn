
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// function, 2 variables (valor, descuent) return number

 const descuento = (valor:number, porcentaje:number) =>   valor - (valor * (porcentaje/100) )

 console.log(descuento(1000, 20))

 // 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const pasado = new Date(1984,4,23)



function diferenciaAnios(pasado:Date){
  const date = new Date(pasado).getTime()
  const today = new Date().getTime()

  return Math.floor(today/(1000*60*60*24*365) - date/(1000*60*60*24*365))
}

const pasado = new Date(1984,4,23)

const diferencia:number = diferenciaAnios(pasado)

console.log(diferencia)