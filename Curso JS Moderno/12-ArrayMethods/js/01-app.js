const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Comprovar si un valor existe en un arreglo

// meses.forEach( mes => {
//     if(mes === 'Enero'){
//         console.log('Enero si existe');
//     }
// });

// const resultado = meses.includes('Diciembre');
// console.log(resultado);

//En un arreglo de objetos de utiliza .some

const existe = carrito.some( producto =>  producto.nombre === 'Monitor curvo');
console.log(existe);

//En un arreglo tradicional

const existe2 = meses.some ( mes => mes === 'Enero')
console.log(existe2);