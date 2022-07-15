const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log("Pausando..."),
  borrar: (id) => console.log(`Borrando canción... ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la Playlist de ${nombre}`),
  reproducirPlayList: (nombre) =>
    console.log(`reproduciendo la Playlist ${nombre}`),
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);

reproductor.crearPlaylist("heavy Metal");
reproductor.crearPlaylist("Rock 90s");
reproductor.reproducirPlayList("Heavy Metal");
