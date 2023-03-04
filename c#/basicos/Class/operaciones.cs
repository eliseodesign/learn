using System;
namespace Operadores{
    public class Operaciones
  {
    public void Operar()
    {
      Console.BackgroundColor = ConsoleColor.DarkMagenta;
      Console.ForegroundColor = ConsoleColor.White;
      Console.WriteLine("ingrese a:");
      string linea = Console.ReadLine();

      int a = int.Parse(linea);
      Console.WriteLine("ingrese b:");
      linea = Console.ReadLine();
      int b = int.Parse(linea);

      Console.WriteLine("suma:" + (a + b));
      Console.WriteLine("resta:" + (a - b));
      Console.WriteLine("multiplicación:" + (a * b));
      Console.WriteLine("división:" + (a / b));

      Console.Read();
    }
  }
}