// forEach

const pendientes = ["tarea", "comer", "proyecto", "estudiar JavaScript"];

pendientes.forEach((pendiente, index) => {
  console.log(`pendiente ${index + 1}: ${pendiente}`);
});

const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const nuevoArreglo = carrito.forEach((producto) => producto.precio);

const nuevoArreglo2 = carrito.map((producto) => producto.precio);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
