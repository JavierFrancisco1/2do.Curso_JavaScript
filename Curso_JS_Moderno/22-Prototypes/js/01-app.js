const cliente = {
  nombre: "juan",
  saldo: 500,
};

console.log(cliente);


function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const javier = new Cliente("javier", "500");

console.log(javier);
