namespace Basicos{
    public class OperarArray{
    // Crea un método que reciba un array de enteros y devuelva la suma de todos ellos.

    public int sumarArr(int[] numeros){

      int acumulador = 0;
      for(int i = 0; i < numeros.Length; i++){
        acumulador += numeros[i];
      }
      return acumulador;
    }
    // Crea un método que reciba un array de enteros y devuelva el valor máximo.
    public int valorMax(int[] numeros){
      int mayor = numeros.Max();
      return mayor;
    }

    // Crea un método que reciba un array de enteros y devuelva la media de los valores.
    public int promedio(int[] numeros){
      int acumulador = 0;
      foreach(int item in numeros){
        acumulador += item;
      }
      int promedio = acumulador/numeros.Length;

      return promedio;
    }


    public bool find(int[] numeros, int num){
      foreach(int number in numeros){
        if(number == num){
          return true;
        }
      }
      
      return false;
    }
   
  }
}