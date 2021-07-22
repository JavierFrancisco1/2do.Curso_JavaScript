const carrito = [];

// Definir un producto

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'celular',
    precio : 800
}

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre : 'teclado',
    precio: 50
}

carrito.unshift(producto3);


console.table(carrito);