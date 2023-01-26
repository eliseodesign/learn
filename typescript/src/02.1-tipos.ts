// ENUM es una agrupación de constantes con nombre que tendran indice 
enum Roles{
  User = "USER",// inicia en 0 pero puedo definirlo 
  Admin = "ADMINISTRADOR", // 2
  SuperAdmin = "SUPER ADMINISTRADOR"
}


enum ContractStatus{
  Permanete,
  Temporal,
  Apprentice
}

const dev :ContractStatus = ContractStatus.Apprentice

console.log(ContractStatus[dev])
console.log(dev)


// Type assertion 
let chanel:any = "Eliseo"

// let chanelStr = <string>chanel;
let chanelStr = chanel as string;


// UNION
let dark: number | boolean = true
dark = 0 // es valido
