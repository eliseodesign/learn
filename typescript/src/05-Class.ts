// las clases nos sirven para organizar nuestro código 
// ---
// class Employ {
//    Atributos

//  // Accescontrol keyword 
//   // public, private,pretected
//   public id!:number; // por defecto es public
//   private name!:string; // no podemos acceder desde istancias  
//   dept!:string;
//   constructor(id:number, name:string, dept:string){
//     this.id = id
//     this.name = name
//     this.dept = dept

//     this.showInfo()
//   }
//   // Metodos
//   showInfo():void { 
//      console.log(this.name )
//   } 


// }
class Employ {
    // Atributos
    constructor(private id:number,private name:string,private dept:string){
      this.showInfo()
    }
    public city = "Izalco";
    protected empress = "EliseoDesign S.A"

    // Metodos
    showInfo():void { 
       console.log(this.name )
    } 

  
  }


class Dev extends Employ{
  super(){
    // this.dept = "dev"
  }
  dev(){
    console.log(this.empress)
  }
 
}


const developer = new Dev(2, "Eli", "dev")
