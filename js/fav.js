import { obtenerApodActual } from "./ui.js";

const CALVE_FAVORITOS = "apod-favoritos";

let cargarAPOD = null;

function obtenerFavoritos() {
  const datos = localStorage.getItem(CALVE_FAVORITOS);

  if (!datos) return [];

  return JSON.parse(datos);
}

function guardarFavoritos(favoritos) {
  localStorage.setItem(CALVE_FAVORITOS, JSON.stringify(favoritos));
}

function agregarFavorito() {
  const apod = obtenerApodActual();
  if (!apod) return;
  const favoritos = obtenerFavoritos();
  const yaExiste = favoritos.some((f) => f.date === apod.date);
  if (yaExiste) return;
  favoritos.push({ date: apod.date, title: apod.title });

  guardarFavoritos(favoritos);
  renderFavoritos();
}

function eliminarFavorito(fecha) {
  let favoritos = obtenerFavoritos();

  // filter() crea un NUEVO array sin el elemento de esa fecha.
  favoritos = favoritos.filter((fav) => fav.date !== fecha);

  guardarFavoritos(favoritos);
  renderFavoritos();
}

function renderFavoritos() {
  const lista = document.getElementById("favorites-list");
  const favoritos = obtenerFavoritos();

  // Limpiamos antes de redibujar, si no se duplican en pantalla.
  lista.innerHTML = "";

  // Estado vacío.
  if (favoritos.length === 0) {
    lista.innerHTML = "<li class='list-group-item favorite-item'>No hay favoritos guardados.</li>";
    return;
  }


favoritos.forEach((fav) => {
  const li = document.createElement("li");
  li.className = "list-group-item favorite-item"
  // Parte clicable: al hacer clic recarga ese APOD.
  const info = document.createElement("span");
  info.textContent = `${fav.title} (${fav.date})`;
  info.style.cursor = "pointer";
  info.addEventListener("click", () => {
    // Usamos la función que nos pasó app.js.
    if (cargarAPOD) cargarAPOD(fav.date);
  });

  // Botón para borrar este favorito.
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "✕";
  btnBorrar.className = "ms-4 btn btn-danger"
  btnBorrar.addEventListener("click", () => eliminarFavorito(fav.date));

  // info y btnBorrar son HERMANOS dentro del li. Como cada uno tiene su
  // propio listener, clic en borrar NO dispara el de "info". Sin conflictos.
  li.appendChild(info);
  li.appendChild(btnBorrar);
  lista.appendChild(li);
});
}
export function iniciarFavoritos(funcionCargar) {
  cargarAPOD = funcionCargar; // guardamos la función para usarla luego

  // Conectamos el botón de guardar (lo crea tu compañera en el HTML).
  const btnGuardar = document.getElementById("save-favorite");
  btnGuardar.addEventListener("click", agregarFavorito);

  // Mostramos los favoritos YA guardados de sesiones anteriores.
  // Esto es lo que hace que "persistan al recargar".
  renderFavoritos();
}
