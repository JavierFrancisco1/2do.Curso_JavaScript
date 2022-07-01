iniciarApp();
function iniciarApp() {
  console.log("Iniciando app");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda Función");
  usuarioAutenticado("Javier");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere...");
  console.log(`usuario autenticado exitosamente: ${usuario} `);
}
