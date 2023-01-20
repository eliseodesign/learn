// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertir = (str:string):string => str.split("").reverse().join("")
console.log(invertir("Eliseo"))


// 6) Programa una fución para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const countRepet = (paragraph:string, str:string):number => {
  return paragraph
    .toLocaleLowerCase().split(" ")
    .filter( word => word === str.toLocaleLowerCase()).length
}

console.log(countRepet("Eliseo Arevalo Espinoza Eliseo", "Eliseo"))


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const isPalindrome = (word:string):boolean => {
  let reverse = word.split("").reverse().join("")
  return reverse === word
}
console.log(isPalindrome("eliseo"))

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const deleteWord = (paragraph:string, word:string):number[] | string[] =>{
  const arr = paragraph.split(" ")
  const filter = arr.map(str => { 

    const start = str.indexOf(word)
    console.log(start)
    if(start!=-1){
      return str.slice(start+3)
    }else return str
      
   })
   return filter
}

console.log(deleteWord("xyz1 xyz2 xyz3 xyz400", "xyz"))
