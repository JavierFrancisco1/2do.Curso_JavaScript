const nav = document.querySelector(".navegacion");

// registrar un evento

nav.addEventListener("mouseenter", () => {
  console.log("entrando en la navegacion");

  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("dblclick", () => {
  console.log("saliendo de la navegacion");
  nav.style.backgroundColor = "white";
});

//mousedown -- cimiliar al click
// click
//dblclick - Doble click
//mouseup - cunado sueltas el mouse
