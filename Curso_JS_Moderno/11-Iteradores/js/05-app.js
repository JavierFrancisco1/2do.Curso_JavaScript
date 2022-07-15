let i = 1;

do {
  if (i % 2 === 1) {
    console.log(`numero impar ${i}`);
  }
  if (i % 2 === 0) {
    console.log(`numero par ${i}`);
  }

  i++; // Incremento
} while (i < 100); // condicion
