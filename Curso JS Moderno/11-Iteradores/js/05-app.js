let i = 1; //inicio

do{
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZBUZZ`);
      } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
      } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
      }

    i++; //incremento
}while(i <= 100) //condicion