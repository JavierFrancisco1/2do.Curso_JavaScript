const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;

  if (descuento) {
    resolve("Descuento Aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

// aplicarDescuento

aplicarDescuento
  .then((resultado) => descuento(resultado))
  .catch((error) => console.log(error));

// hay 3 valores posibles...

// fulfilled - EL promise se cumplio
// rejected - El promise no se cumplio
// pending - El promise no se a cumplido y tampoco a sido rechazado

function descuento(mensaje){
    console.log(mensaje);
}
