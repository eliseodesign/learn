namespace Prueba{

  class Program{

    static void Main(string[] args){
      // inicializar variables
        int Num1 = 0;
        int Num2 = 0;

        Console.WriteLine("Introduzca el primer numero");
        Num1 =  int.Parse(Console.ReadLine());
        Console.WriteLine("Introduzca el segundo numero");
        Num2 =  int.Parse(Console.ReadLine());

        if(Num1 > 0 && Num2 > 0){

          if(Num1 > Num2){
            Console.WriteLine(Num1 + " es mayor que " + Num2);
          }
          if(Num2 > Num1){
            Console.WriteLine(Num2 + " es mayor que " + Num1);
          }

        }
        else{
          Console.WriteLine("Numeros invalidos");
        }

        Console.WriteLine();
    }
  }
}