iniciarApp();
function iniciarApp() {
  console.log("iniciando app...");
  segundaFuncion()
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");
  usuarioAutenticado('pablo')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario....Espere...');
    console.log(`Usuario autenticado Exitosamente: ${usuario}`);
}

