const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },

  pausar: function () {
    console.log("Pausando...");
  },
  borrar: function (id) {
    console.log(`Borrando canción... ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la Playlist de ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`reproduciendo la Playlist ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);

reproductor.crearPlaylist("heavy Metal");
reproductor.crearPlaylist("Rock 90s");
reproductor.reproducirPlayList("Heavy Metal");
