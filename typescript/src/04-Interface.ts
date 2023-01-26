// ? Una interface es un contrato de código que define la forma de la data a trabajar
// es como un molde
interface Book{
  id:number;
  title:string;
  author:string;
  coAuthor?:string; // "?" indica que la propiedad sera opcional
  isLoan?:(id:number)=>void
}

const book:Book = {
  id:1,
  title:"El principito",
  author:"Eliseo"
  
}
function getBook():Book{
  return {id:2, title:"titulo generico", author:"Franck"}
}
const mybook = getBook()


// Podemos Extender una interfeace 
interface Person{
  id:number;
  names:string;
}
interface Employee extends Person{
  dept:string;
}
interface Client extends Person{
  country:String
}

const eliseo:Employee = {
  id:2,
  names:"liseo",
  dept:"S"
}