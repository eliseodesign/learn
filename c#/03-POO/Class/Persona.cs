namespace POO{
  public class Persona {

  public string _nombre;
  public int _edad;

  public Persona(string nombre, int edad){
    _nombre = nombre;
    _edad = edad;
  }

  public string getNombre(){
    return _nombre;
  }

  public void setNombre(string nombre){
    _nombre = nombre;
  }



}
}