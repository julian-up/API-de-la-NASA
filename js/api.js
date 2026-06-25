const API_KEY = "1TUKsecP1PIy1quX7VkbxAJuJwPHWXOD8DaJRNeO";
const URL_BASE = "https://api.nasa.gov/planetary/apod";

export async function obtenerAPOD(fecha = "") {
  let url = `${URL_BASE}?api_key=${API_KEY}`;
  if (fecha) {
    url += `&date=${fecha}`;
  }
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error(`La NASA respondió con estado ${respuesta.status}`);
    }
    const datos = await respuesta.json();

    return datos;
  } catch (error) {
    console.error("Error al obtener el APOD:", error);
    throw error;
  }
}

// console.log(obtenerAPOD('24/06/2026'));
