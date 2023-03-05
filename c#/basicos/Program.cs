// See https://aka.ms/new-console-template for more information
using Operadores;
using NumPrimo;
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

      Console.ReadLine();
    }
  }
}