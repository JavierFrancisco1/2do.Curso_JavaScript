const criptoMonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const objBusqueda = {
  moneda: "",
  criptomoneda: "",
};

//Crear Un Promise
const obtenerCriptoMonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptoMonedas();
  formulario.addEventListener("submit", submitFormulario);
  criptoMonedasSelect.addEventListener("change", leerValor);
  monedaSelect.addEventListener("change", leerValor);
});

async function consultarCriptoMonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

//   fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((resultado) => obtenerCriptoMonedas(resultado.Data))
//     .then((criptomonedas) => selectCriptomonedas(criptomonedas));

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptoMonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);
    } catch (error) {
        console.log(error);
    }
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptoMonedasSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  // Validar el formulario
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  // Consultar la API con los resultados
  consultarAPI();
}

function mostrarAlerta(mensaje) {
  const existeError = document.querySelector(".error");

  if (!existeError) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error");

    // Mensaje de error
    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

async function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

//   fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((cotizacion) => {
//       mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
//     });

    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    } catch (error) {
        console.log(error);
    }
}

function mostrarCotizacionHTML(cotizacion) {
  limpiarHTML();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = `<small class='transparent'>El precio es:</small> <span class='p-short'>${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `<small class='transparent'>Precio mas alto del dia:</small> <span class='p-short'>${HIGHDAY}</span>`;

  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `<small class='transparent'>Precio mas bajo del dia:</small> <span class='p-short'>${LOWDAY}</span>`;

  const ultimasHoras = document.createElement("p");
  ultimasHoras.innerHTML = `<small class='transparent'>Variaci??n ultimas 24 horas:</small> <span class='p-short'>${CHANGEPCT24HOUR}%</span>`;

  const ultimaActualizacion = document.createElement("p");
  ultimaActualizacion.innerHTML = `<small class='transparent'>Ultima actualizaci??n:</small> <span class='p-short'>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  limpiarHTML();

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
`;

  resultado.appendChild(spinner);
}
