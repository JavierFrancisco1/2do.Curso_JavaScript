const nombre = localStorage.getItem("nombre");
console.log(nombre);

const productoJson = localStorage.getItem("producto");
console.log(JSON.parse(productoJson));

const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem("meses", JSON.stringify(meses));

const obtenerMeses = localStorage.getItem("meses");
const mesesArray = JSON.parse(obtenerMeses);
console.log(mesesArray);
