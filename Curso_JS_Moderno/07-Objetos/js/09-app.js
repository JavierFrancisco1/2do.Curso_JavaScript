"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto);

producto.disponible = false;
//  producto.imagen = "imagen.jpg";
//  delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));

/* con el metodo (seal) no se puede eliminar ni agregar otra propiedad al objeto 
 solo se puede modificar el valor de las propiedades existentes del objeto como el boolean ..como arriba le cambiamos
 de true a false */
