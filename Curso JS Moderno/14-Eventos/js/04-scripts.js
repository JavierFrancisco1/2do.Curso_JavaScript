const formulario = document.querySelector("#formulario");
console.log(formulario);

formulario.addEventListener("submit", validarformulario);

function validarformulario(e){
  e.preventDefault();

  console.log("Consultar una api...");

  console.log(e.target.action);
}
