const enlace = document.createElement("a");

// agregandole el texo
enlace.textContent = "Nuevo Enlace";

// añadiendo href
enlace.href = "/nuevo-enlace";

console.log(enlace);
enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace");

enlace.classList.add("alguna-clase");

//Seleccionar la navegacion

const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);

// insertar el enlace antes(insertBefore) de la posicion numero 1 osea antes del enlace *ayuda* (navegacion.children[2])
navegacion.insertBefore(enlace, navegacion.children[1]);

// crear un CARD

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

// Crear la div con la clase 'info'
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear Imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

//Crear el Card Padre
const Card = document.createElement("div");
Card.classList.add("card");

//asignar la imagen
Card.appendChild(imagen);

//asignar info

Card.appendChild(info);

console.log(Card);

//insertar la tarjeta card en el contenedor padre cards

const contenedorCards = document.querySelector(".hacer .contenedor-cards");
contenedorCards.insertAdjacentElement("afterbegin", Card);
console.log(contenedorCards);
