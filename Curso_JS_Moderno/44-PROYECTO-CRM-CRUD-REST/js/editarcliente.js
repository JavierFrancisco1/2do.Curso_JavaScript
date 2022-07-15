import { obtenerCliente } from "./API.js";

(function () {
  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get("id"));
    const cliente = await obtenerCliente(idCliente);

   mostrarCliente(cliente);
  });

  function mostrarCliente(cliente){
    const { nombre,email,telefono,empresa} = cliente;
    console.log(cliente);
  }









})();
