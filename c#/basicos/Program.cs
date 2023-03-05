// See https://aka.ms/new-console-template for more information
using Operadores;
using NumPrimo;
using ArrNumber;
namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Operaciones miObjeto = new Operaciones();
      miObjeto.Operar();

      int number = int.Parse(Console.ReadLine());

      Primo primoI = new Primo();
      var primoFunct = primoI.esPrimo(number);
      System.Console.WriteLine(primoFunct.Item1);

      var tupla = primoFunct.Item2;

      foreach(int actual in tupla){
        System.Console.WriteLine("( " + actual + " )");
      }


      int[] array = {1,2,3,4};
      arrOperar arr = new arrOperar();
      var resultadoArr = arr.sumarArr(array);
      System.Console.WriteLine(resultadoArr);
      Console.ReadLine();
    }
  }
}