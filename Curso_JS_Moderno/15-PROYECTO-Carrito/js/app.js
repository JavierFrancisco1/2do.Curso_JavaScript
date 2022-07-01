// variables

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  // cuando agregas un curso presionando 'Agregar al carrito'
  listaCursos.addEventListener("click", agregarCurso);

  // Elimina Cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  // Vaciar el Carrito
  vaciarCarritoBtn.addEventListener("click", (e) => {
    articulosCarrito = []; // reseteamos el arreglo

    LimpiarHTML(); // Eliminamos todo el HTML
  });
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}

//Elimina un curso del carrito
function eliminarCurso(e) {
  // console.log(e.target.classList);
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //Eliminar del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => {
      return curso.id !== cursoId;
    });
    carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
  // console.log(curso);

  // crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => {
    return curso.id === infoCurso.id;
  });

  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // Este retorna el objeto actualizado
      } else {
        return curso; // retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agrega Elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  // console.log(articulosCarrito);

  carritoHTML();
}

// muestra el carrito de compras en el HTML
function carritoHTML() {
  //Limpiar el HTML
  LimpiarHTML();

  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    <img src = '${imagen}' width='100'>
    </td>
    <td>
      ${titulo}
    </td>
    <td>
      ${precio}
    </td>
    <td>
      ${cantidad}
    </td>
    <td>
      <a href='#' class='borrar-curso' data-id = '${curso.id}'> X </a>
    </td>
    `;

    //agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody

function LimpiarHTML() {
  //Forma lenta
  // contenedorCarrito.innerHTML = '';

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
