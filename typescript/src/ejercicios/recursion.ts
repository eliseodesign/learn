const factorialN = (n:number = 0):number => {
  if(n < -1) return -1
  if(n < 1) return 1

  return (n * factorialN(n -1))
}

console.log(factorialN())