//Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const form = document.querySelector("#enviar-mail");

//Variables de los campos
const Email = document.querySelector("#email");
const Asunto = document.querySelector("#asunto");
const Mensaje = document.querySelector("#mensaje");

const exp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//eventos
EventListener();
function EventListener() {
  //cargando la App y el DOM
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //eventos de los input
  Email.addEventListener("blur", validarFormulario);
  Asunto.addEventListener("blur", validarFormulario);
  Mensaje.addEventListener("blur", validarFormulario);

  btnReset.addEventListener("click", resetear);

  form.addEventListener("submit", enviarEmail);
}

//funciones

function iniciarApp() {
  btnEnviar.disabled = true;
}

function validarFormulario(e) {
  e.preventDefault();

  if (e.target.value.length > 0) {
    //eliminamos los errores

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");

    const errores = document.querySelector("p.error");

    if (errores) {
      errores.remove();
    }
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (exp.test(e.target.value)) {
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");

      const errores = document.querySelector("p.error");

      if (errores) {
        errores.remove();
      }
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");

      mostrarError("El email no es valido");
    }
  }

  if (exp.test(Email.value) && Asunto.value !== "" && Mensaje.value !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

//vamos a mostrar los errores en validacion

function mostrarError(mensajito) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensajito;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const variosMensajesError = document.querySelectorAll(".error");

  if (variosMensajesError.length === 0) {
    form.appendChild(mensajeError);
  }
}

function enviarEmail(e) {
  e.preventDefault();

  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";

    const parrafo = document.createElement("p");
    parrafo.textContent = "el mensaje se envió correctamente";
    parrafo.classList.add(
      "my-10",
      "text-center",
      "bg-green-500",
      "p-2",
      "text-white",
      "font-bold",
      "uppercase"
    );

    form.insertBefore(parrafo, spinner);

    setTimeout(() => {
      parrafo.remove();

      resetear();
    }, 5000);
  }, 3000);
}

function resetear(e) {
  form.reset();
  Email.classList.remove("border-green-500", "border-red-500");
  Asunto.classList.remove("border-green-500", "border-red-500");
  Mensaje.classList.remove("border-green-500", "border-red-500");
}
