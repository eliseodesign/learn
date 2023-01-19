/* Typescript es un supra conjunto de javascript que añade nuevas funcionalidades a javascipt 
javascript es compatilble con typescript y typescript se compila a javascript */

function addNumbers(x, y) {
  return x + y;
}

/* al codigo jsvascript anterior es totalmente compatible con typescript
pero si abres este archivo en vsCode te darás cuenta que el editor señala errores en los parametros de la función*/


/* function addNumbers(x, y) {
                        ^error
Esto ocurre ya que ts espera que definamos el tipo de los parametros y al no definirlo ts lo define com any

*/

// SOLUCIÓN AGREGANDO EL TIPO DE DATO

function addNumbersTypes(x:number, y:number) {
  return x + y;
}
