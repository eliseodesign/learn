// Enum es una agrupación de constantes con nombre que tendran indice 
enum Roles{
  User = "USER",// inicia en 0 pero puedo definirlo 
  Admin = "ADMINISTRADOR", // 2
  SuperAdmin = "SUPER ADMINISTRADOR"
}


// Type assertion 
let chanel:any = "Eliseo"

// let chanelStr = <string>chanel;
let chanelStr = chanel as string;


