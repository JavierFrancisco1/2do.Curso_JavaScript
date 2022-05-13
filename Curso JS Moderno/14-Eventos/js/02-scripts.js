const nav = document.querySelector(".navegacion");

// registrar un evento
nav.addEventListener("mouseout", (e) => {
  console.log("saliendo de la navegación");

  nav.style.backgroundColor = "transparent";
});
nav.addEventListener("dblclick", (e) => {
  console.log("entrando en la navegación");
  nav.style.backgroundColor = "white";
});

// mousedown - similar al click
// click
//dblclick = cuando das doble click
// mouseup - cuando sueltas el mouse
