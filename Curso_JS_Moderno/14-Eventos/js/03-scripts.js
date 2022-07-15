const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log(`fallo la validacion`);
  }else{
    console.log(`${e.target.value}`);
  }
  
});

// EVENTOS DE PARA LOS INPUTS

// KEIDOWN se ejecuta cuando precionas una tecla
// KEIUP se ejecuta cuando precionas y sueltas una tecla
// blur se ejecuta en los inputs cuando estas escribiendo en un input y despues das click fuera de ese formulario
// copy - el evento se ejecuta cuando seleccionamos alguna cosa de la pagina y queremos copiarlo con ctrl C.
// Paste - se ejecuta el evento cuando pegamos algo en el lugar donde aplicamos el evento
// Cut se ejecuta cuando cortamos algo con ctl X.
// input se ejecuta cuando estamos escribiendo,cuando copiamos,cuando cortamos,cuando pegamos..cuando
// realizamos cualquiera de los otros eventos dentro de un input EXEPTO (Blur)..
