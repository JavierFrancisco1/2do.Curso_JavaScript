const producto = "Monitor de 20 pulgadas";

//.Repeat te va permitir una cadena de texto.
const texto = " en promocion".repeat(2.4);

console.log(texto);

console.log(`${producto} ${texto}!!!`);

//split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";

console.log(actividad.split(" "));

const hobbies = "Leer caminar, biblioteca,escribir,aprender a programar";
console.log(hobbies.split(", "));

const tweet = "apendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));
