// variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event listeners
eventListeners();
function eventListeners() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);

    crearHTML();
  });
}

// Funciones

function agregarTweet(e) {
  e.preventDefault();
  // Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  if (tweet === "") {
    MostrarError("Un mensaje no puede ir vacío");

    return; // evita que se ejecuten mas lineas de código
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  // Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  // una vez agregado vamos a crear HTML
  crearHTML();

  // Reiniciar el Formulario

  formulario.reset();
}

//Mostrar mensaje de error
function MostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  // Elimina la alerta después de 3 segundos
  setTimeout(() => {
    contenido.remove();
  }, 3000);
}

//Muestra un listado de los tweets
function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // Agregar un boton de eliminar
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "X";

      // Añadir la funcion de eliminar
      btnEliminar.onclick = function () {
        borrarTweet(tweet.id);
      };

      // Crear el HTML
      const li = document.createElement("li");

      //Añadir el texto
      li.innerText = tweet.tweet;

      // Asignar el boton
      li.appendChild(btnEliminar);

      // Insertarlo en el HTML
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

//Agrega los tweets actuales a localStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML()
}

//Limpiar el HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
