// Object literal

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Object constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('television',100);
console.log(producto3);

