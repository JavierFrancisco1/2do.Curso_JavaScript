const d = document;

const card = d.querySelector(".card");
console.log(card);

// podemos tener selectores especificos como en css

const info = d.querySelector(".premium .info");
console.log(info);

//seleccionar el segundo card de hospedaje
const segundoCard = d.querySelector(".hospedaje .card:nth-child(2)");
console.log(segundoCard);

// seleccionar el formulario
const formulario = d.querySelector("#formulario");
console.log(formulario);

// Seleccionar Elementos HTML

const nav = document.querySelector("nav");
console.log(nav);
