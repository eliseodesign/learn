using Basicos;
namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Operaciones miObjeto = new Operaciones();
      miObjeto.Operar();

      int number = int.Parse(Console.ReadLine());

      NumeroPrimo primoI = new NumeroPrimo();
      var primoFunct = primoI.esPrimo(number);
      System.Console.WriteLine(primoFunct.Item1);

      var tupla = primoFunct.Item2;

      foreach(int actual in tupla){
        System.Console.WriteLine("( " + actual + " )");
      }


      int[] array = {4,3,3,4};
      OperarArray arr = new OperarArray();
      var resultadoArr = arr.sumarArr(array);
      System.Console.WriteLine(resultadoArr);
      Console.ReadKey();

      Arrays.crear("Eliseo", "Arévalo");
    }
  }
} 