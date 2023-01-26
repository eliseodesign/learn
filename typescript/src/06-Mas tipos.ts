// UNION
let multiType: number | boolean;
multiType = 20;         //? Valid
multiType = true;       //? Valid
//multiType = "twenty";   //? Invalid



// INTERSECTION
interface mascota{
  nombre: string;
  vacunas: boolean;
}
interface perro {
  ladrido: string;
}
type perroMascota = mascota & perro;

let newPerro : perroMascota ={
  nombre:"fifu",
  vacunas:true,
  ladrido:"guagua"

}


// TIPOS LITERALES 
// ejemplo de uso 
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    // Valid
myResult = "pass";          // Valid