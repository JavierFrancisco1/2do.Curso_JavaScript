// Fizz buz...

// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzzz
// 15 30 45 .. FIZZBUZZ!

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
