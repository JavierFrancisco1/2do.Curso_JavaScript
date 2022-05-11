const carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];


const nuevoArreglo = carrito.map((producto) => {
  return`${producto.nombre} - precio: ${producto.precio}`;
});


const nuevoArreglo2 = carrito.forEach((producto) => {
  return`${producto.nombre} - precio: ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);