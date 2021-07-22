const carrito = [];

// Definir un producto

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "celular",
  precio: 800,
};

const producto3 = {
  nombre: "teclado",
  precio: 50,
};

const producto4 = {
    nombre: "celular2",
    precio: 8000,
  };

carrito.unshift(producto,producto2,producto3,producto4)




console.table(carrito);

// Eliminar el ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

// // Eliminar del inicio del arreglo

// carrito.shift();

// console.table(carrito)

carrito.splice(3,1)
console.table(carrito);
