const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};
// Keys nos devuelve las llaves del objeto
console.log(Object.keys(producto));

//Values nos devuelve el valor de las llaves o propiedades del objeto del objeto
console.log(Object.values(producto));

//nos devuelve en pares la llave y el valor de cada propiedad de nuestro objeto
console.log(Object.entries(producto));
