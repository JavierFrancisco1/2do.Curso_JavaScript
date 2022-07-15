const carrito = [];

// Definir un producto

const producto = {
  nombre: "Monitor de 24 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "celular",
  precio: 800,
};
const producto4 = {
  nombre: "celular 2",
  precio: 1000,
};
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carrito.unshift(producto3);

console.table(carrito);

// //Eliminar el ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// //Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// el primer parámetro indica desde que posición queremos que empiece a eliminar.
// el segundo parámetro debemos indicar cuantas propiedades deseamos eliminar después 
// de la posición que le indicamos si le ponemos 1 pues solo elimina uno y asi sucesivamente
carrito.splice(1,2)
console.table(carrito);