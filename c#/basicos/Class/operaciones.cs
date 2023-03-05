using System;
namespace Operadores{
    public class Operaciones
  {
    public void Operar()
    {
      Console.BackgroundColor = ConsoleColor.DarkGray;
      Console.ForegroundColor = ConsoleColor.Blue;
      Console.WriteLine("ingrese a:");
      int a = int.Parse(Console.ReadLine());
      System.Console.WriteLine("a = " + a + " y es " + (a%2==0 ? "par" : "impar"));

      Console.WriteLine("ingrese b:");
      int b = int.Parse(Console.ReadLine());
      System.Console.WriteLine("b = " + b + " y es " + (b%2==0 ? "par" : "impar"));


      Console.WriteLine("suma:" + (a + b));
      Console.WriteLine("resta:" + (a - b));
      Console.WriteLine("multiplicación:" + (a * b));
      Console.WriteLine("división:" + (a / b));

      
    }
  }
}