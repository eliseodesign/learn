namespace NumPrimo{

  public class Primo{

    public (bool, List<int>) esPrimo(int num){

      bool si = false;
      List<int> primos = new List<int>();

      for(int i = num - 1; i > 1; i--){

        bool thisPrimo = true;

        for(int j = i - 1; j > 1; j--){
          if(i%j==0){
            thisPrimo = false;
            break;
          
          }
        }

        if(thisPrimo){
          primos.Add(i);
        }
        if(num%i==0){
          si = true;
        }
      }

      return (si, primos);
    }
  }
}