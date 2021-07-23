const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar() {
    console.log("Pausando...");
  },
  borrar: function (id) {
    console.log(`Borrando cancion.. ${id}`);
  },
  agregarUnaPlayList: function (nombre) {
    console.log(`Agregando una nueva playList: ${nombre}`);
  },
  borrarUnaPlayList: function (nombre) {
    console.log(`Borrando una Play List de su biblioteca: ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`reproduciendo: ${nombre}`);
  },
};

reproductor.agregarUnaPlayList("heavy metal");
reproductor.borrarUnaPlayList("Rock mexicano");

reproductor.reproducirPlayList("heavy Metal");

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(30);
