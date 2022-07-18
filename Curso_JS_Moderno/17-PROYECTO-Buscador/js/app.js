// const formulario = document.querySelector("#buscador");
// console.log(formulario);

// //variables
// const marca = document.querySelector("#marca");
// const year = document.querySelector("#year");
// const minimo = document.querySelector("#minimo");
// const maximo = document.querySelector("#maximo");
// const puertas = document.querySelector("#puertas");
// const transmision = document.querySelector("#transmision");
// const color = document.querySelector("#color");

// // Contenedor para los resultados
// const resultado = document.querySelector("#resultado");

// const max = new Date().getFullYear() - 2;
// const min = max - 10;

// // Generar un objeto con la busqueda
// const datosBusqueda = {
//   marca: "",
//   year: "",
//   minimo: "",
//   maximo: "",
//   puertas: "",
//   transmision: "",
//   color: "",
// };

// //eventos
// document.addEventListener("DOMContentLoaded", () => {
//   mostrarAutos(autos); // Muestra los autos al cargar

//   // Llena las opciones de años
//   llenarSelect();
// });

// // Event listener para los select de busqueda
// marca.addEventListener("change", (e) => {
//   datosBusqueda.marca = e.target.value;

//   filtrarAuto();
// });
// year.addEventListener("change", (e) => {
//   datosBusqueda.year = parseInt(e.target.value);
//   filtrarAuto();
// });
// minimo.addEventListener("change", (e) => {
//   datosBusqueda.minimo = e.target.value;

//   filtrarAuto();
// });
// maximo.addEventListener("change", (e) => {
//   datosBusqueda.maximo = e.target.value;
//   filtrarAuto();
// });
// puertas.addEventListener("change", (e) => {
//   datosBusqueda.puertas = e.target.value;
//   filtrarAuto();
// });
// transmision.addEventListener("change", (e) => {
//   datosBusqueda.transmision = e.target.value;
//   filtrarAuto();
// });
// color.addEventListener("change", (e) => {
//   datosBusqueda.color = e.target.value;
//   filtrarAuto();
// });

// // Funciones
// function mostrarAutos(autos) {
//   limpiarHTML(); // Elimina el HTML previo
//   autos.forEach((auto) => {
//     const { marca, modelo, year, puertas, transmision, precio, color } = auto;
//     const autoHTML = document.createElement("p");

//     autoHTML.textContent = `
//          ${marca} ${modelo} - ${year} - ${puertas} puertas - transmisión: ${transmision} - precio: ${precio} - color: ${color}

//         `;

//     // Inserta en el HTML
//     resultado.appendChild(autoHTML);
//   });
// }

// // Limpiar HTML
// function limpiarHTML() {
//   while (resultado.firstChild) {
//     resultado.removeChild(resultado.firstChild);
//   }
// }

// // Genera los años del select
// function llenarSelect() {
//   for (let i = max; i >= min; i--) {
//     const opcion = document.createElement("option");
//     opcion.value = i;
//     opcion.textContent = i;
//     year.appendChild(opcion); // Agrega las opciones del año
//   }
// }

// //Funcion que filtra en base a la busqueda
// function filtrarAuto() {
//   const resultado = autos
//     .filter(filtrarMarca)
//     .filter(filtrarYear)
//     .filter(filtrarMinimo)
//     .filter(filtrarMaximo)
//     .filter(filtrarPuertas)
//     .filter(filtarTransmision)
//     .filter(filtrarColor);
//   if (resultado.length) {
//     mostrarAutos(resultado);
//   } else {
//     noResultado();
//   }
// }

// function noResultado() {
//   limpiarHTML();
//   const noResultado = document.createElement("div");
//   noResultado.classList.add("alerta", "error");
//   noResultado.textContent =
//     "No Hay Resultados,Intenta con otros términos de búsqueda";
//   resultado.appendChild(noResultado);
//   setTimeout(() => {
//     resultado.removeChild(noResultado);
//     setTimeout(() => {
//       mostrarAutos(autos);
//       resetearFormulario();
//     }, 1000);
//   }, 5000);
// }

// function filtrarMarca(auto) {
//   const { marca } = datosBusqueda;
//   if (marca) {
//     return auto.marca === marca;
//   }
//   return auto;
// }

// function filtrarYear(auto) {
//   const { year } = datosBusqueda;
//   if (year) {
//     return auto.year === year;
//   }
//   return auto;
// }

// function filtrarMinimo(auto) {
//   const { minimo } = datosBusqueda;
//   if (minimo) {
//     return auto.precio >= minimo;
//   }
//   return auto;
// }

// function filtrarMaximo(auto) {
//   const { maximo } = datosBusqueda;
//   if (maximo) {
//     return auto.precio <= maximo;
//   }
//   return auto;
// }

// function filtrarPuertas(auto) {
//   const { puertas } = datosBusqueda;
//   if (puertas) {
//     return auto.puertas === parseInt(puertas);
//   }
//   return auto;
// }

// function filtarTransmision(auto) {
//   const { transmision } = datosBusqueda;
//   if (transmision) {
//     return auto.transmision === transmision;
//   }
//   return auto;
// }

// function filtrarColor(auto) {
//   const { color } = datosBusqueda;
//   if (color) {
//     return auto.color === color;
//   }
//   return auto;
// }

// // funcion para resetar formulario cuando no se encontro algun resultado

// function resetearFormulario() {
//   formulario.reset();
// }

// Prueba ----------------- *************""""""

// Variables ************
const formulario = document.querySelector("#buscador");

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// CONTENEDOR para los resultados
const resultados = document.querySelector("#resultado");

const max = new Date().getFullYear() - 2;
const min = max - 10;

const objetoInfo = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// *********** EVENTOS *************

document.addEventListener("DOMContentLoaded", () => {
  // LLENA el select de año
  llenarSelect();

  // MostrarAutos
  mostrarAutos(autos);
});

// Eventos para cada select y el filtrado..
marca.addEventListener("change", (e) => {
  objetoInfo.marca = e.target.value;
  filtrarAuto();
});
year.addEventListener("change", (e) => {
  objetoInfo.year = parseInt(e.target.value);
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  objetoInfo.minimo = e.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  objetoInfo.maximo = e.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  objetoInfo.puertas = parseInt(e.target.value);
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  objetoInfo.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  objetoInfo.color = e.target.value;
  filtrarAuto();
});

// ***** FUNCIONES ************

function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}

function mostrarAutos(autos) {
  // Limpiar el HTML previo
  limpiarHTML();

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
             ${marca} ${modelo} - ${year} - ${puertas} puertas - transmisión: ${transmision} - precio: ${precio} - color: ${color}
    
            `;
    resultados.appendChild(autoHTML);
  });
}

function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

// Funcion cuando no se encontraron resultados ***
function noResultado() {
  limpiarHTML();
  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent =
    "No Hay Resultados,Intenta con otros términos de búsqueda";
  resultados.appendChild(noResultado);
  if (resultados.firstChild) {
    setTimeout(() => {
      resultados.removeChild(noResultado);
      setTimeout(() => {
        mostrarAutos(autos);
        resetearFormulario();
      }, 1000);
    }, 5000);
  }
}

// Filtrar los  options

function filtrarMarca(auto) {
  limpiarHTML();
  const { marca } = objetoInfo;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  limpiarHTML();
  const { year } = objetoInfo;
  if (year) {
    return auto.year === year;
  }
  return auto;
}
function filtrarMinimo(auto) {
  limpiarHTML();
  const { minimo } = objetoInfo;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}
function filtrarMaximo(auto) {
  limpiarHTML();
  const { maximo } = objetoInfo;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
function filtrarPuertas(auto) {
  limpiarHTML();
  const { puertas } = objetoInfo;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}
function filtrarTransmision(auto) {
  limpiarHTML();
  const { transmision } = objetoInfo;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  limpiarHTML();
  const { color } = objetoInfo;
  if (color) {
    return auto.color === color;
  }
  return auto;
}

function limpiarHTML() {
  if (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}

function resetearFormulario() {
  formulario.reset();
}
