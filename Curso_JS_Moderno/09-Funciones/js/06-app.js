function saludar(nombre, apellido = "") {
  nombre = nombre || "Desconocido"
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Javier", "Gutierrez");
saludar();
