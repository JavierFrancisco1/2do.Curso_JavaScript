localStorage.removeItem("nombre");
const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem("meses", JSON.stringify(meses));

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray);
mesesArray.push("Nuevo Mes");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(mesesArray));

// Limpia todo lo que almacena local storage lo que haya lo va a eliminar
localStorage.clear();
