function generateFibonacciNumber(number){
  if (number === 1 || number === 0 ){
    return 1;
  }
  return generateFibonacciNumber(number - 1) + generateFibonacciNumber(number - 2);
}

for (let index = 0; index < 10; index++ ){
  console.log('The fibonacci of ' + index + ' is ' +generateFibonacciNumber(index));
}

