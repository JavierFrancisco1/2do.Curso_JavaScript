const sym = Symbol("1");
const sym2 = Symbol("1");

// console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = "javier";
persona[apellido] = "Martinez";
persona.tipoDeCliente = "premium";
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for (let i in persona) {
  console.log(i);
}

// Definir una descripccion del symbol

const nombreCliente = Symbol("nombre del cliente");
const cliente = {};

cliente[nombreCliente] = "pedro";

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
