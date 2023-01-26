//La principal ventaja de TypeScript es que permite agregar tipos estáticos
// DECLARACIÓN DE VARIABLEL CON TIPO

let isDone: boolean = false;  // bolean        

let decimal: number = 6; // Number
let hex: number = 0xf00d;

let myTypeString: string = "Hello World"// String 
// myTypeStrng = 2 // error
// Cambiar tipos de datos daría error en este codigo 


//Dos maneras de Array
let array: number[] = [1,23,3]// Array 
let array2: Array<string> = ["uno", "dos"]
// si quieres tener cualquier tipo de "tipo" en un array
let array3: any[] = [1,"hola", {}]


let tuplaPlayer:[string, number, string, boolean]; // Tuple 
tuplaPlayer = ["a", 2, "true", true] // como un array pero sabes cuantos y que tipo contiene 
// si asignamos un tipo de datos que no corresponde dará error 

// INFERENCIA DE TIPOS
let numero = 33 // ts infiere el tipo de dato 
let lastName:"Arévalo" // string


// UNION 
// podemos unir varios tipos de datos esperados en una variable 
let variable: number | string | null = 3
 variable = "Eliseo"
 variable = null
 // Typescript no tiene problema con redefinir el valor de la variable con los tipos de datos esperados 

 