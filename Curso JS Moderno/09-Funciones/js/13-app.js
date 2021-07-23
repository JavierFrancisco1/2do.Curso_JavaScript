const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log("Pausando..."),
  borrar: (id) => console.log(`Borrando cancion.. ${id}`),
  crearPlayList: (nombre) =>
    console.log(`Agregando una nueva playList: ${nombre}`),
  reproducirPlayList: (nombre) => console.log(`reproduciendo: ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`añadiendo: ${cancion}`);
  },

  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "enter sadman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList("heavy metal");
reproductor.crearPlayList("Rock 90s");
reproductor.reproducirPlayList("heavy Metal");

