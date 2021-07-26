const enlace = document.createElement("a");

//agregandole el texto
enlace.textContent = "nuevo Enlace";

// añadinedo el href

enlace.href = "/nuevo-enlace";

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute("dat-enlace", "nuevo-enlace");

enlace.classList.add("nueva-clase");

//seleccionar la navegacion

const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

// crear un cart de forma dinamica

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//cread div con la clase de info;

const info = document.createElement("div");
info.classList.add("info");

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

imagen.alt = "Texto Alternativo";

//crear el card

const card = document.createElement("div");
card.classList.add("card");

//asignar la imagen

card.appendChild(imagen);

//asignar info

card.appendChild(info);

// insertar en el html

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[0]);
