window.addEventListener("scroll", (e) => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();

  console.log(ubicacion);

  if (ubicacion.top < 602) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aun no da mas scroll");
  }
});
