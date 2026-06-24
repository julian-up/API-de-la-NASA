import { obtenerApodActual } from "./ui.js";

const CALVE_FAVORITOS = "apod-favoritos";

let cargarAPOD = null;

function obtenerFavoritos() {
  const datos = localStorage.getItem(CALVE_FAVORITOS);
}
