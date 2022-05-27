export const nombreCliente = "juan";
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente: ${nombre} - ahorro ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("Si tiene saldo");
  } else {
    console.log("El cliente no tiene saldo");
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInformacion(){
    return `Cliente: ${this.nombre} - ahorro ${this.ahorro}`;
  }
}
