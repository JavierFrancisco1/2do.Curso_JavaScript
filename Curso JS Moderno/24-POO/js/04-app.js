class Cliente {
  #nombre;
  setnombre(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}

const juan = new Cliente();
juan.setnombre("juan");

console.log(juan.getNombre());

console.log(juan.#nombre);
