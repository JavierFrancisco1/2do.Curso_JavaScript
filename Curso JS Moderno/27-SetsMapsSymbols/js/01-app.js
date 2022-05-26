const carrito = new Set();

carrito.add("camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");

console.log(carrito.delete("guitarra")); // delete para borrar de uno en uno y pasandole el valor que deseamos eliminar

// console.log(carrito.has("guitarra")); // has para saber si un elemento se encuentra en el set

console.log(carrito.size); // para conocer el tamaño del Set

carrito.forEach((producto, index, pertenece) => {
  // console.log(producto); // cada valor del Set al iterarlo
  // console.log(index); //es lo mismo que producto ya que solo tenemos el valor o llave y no tenemos llave / Valor
  console.log(pertenece); // es el set completo o el set original
});

console.log(carrito);

// Del siguiente arreglo eliminar los duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20];

let sinDuplicados = new Set(numeros);
console.log(sinDuplicados);
