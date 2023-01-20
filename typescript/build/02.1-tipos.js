"use strict";
// Enum es una agrupación de constantes con nombre que tendran indice 
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMINISTRADOR";
    Roles["SuperAdmin"] = "SUPER ADMINISTRADOR";
})(Roles || (Roles = {}));
// Type assertion 
let chanel = "Eliseo";
// let chanelStr = <string>chanel;
let chanelStr = chanel;
