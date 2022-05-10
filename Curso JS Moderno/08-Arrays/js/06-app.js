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

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

let resultado = [...carrito,producto];
resultado = [...resultado,producto2]
resultado = [producto3,...resultado]

console.table(resultado);
