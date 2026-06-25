import { obtenerAPOD } from "./api.js";
import { iniciarFavoritos } from "./fav.js";
import {
    mostrarAPOD,
    mostrarCargando,
    mostrarError
} from "./ui.js";

const selectorFecha = document.getElementById("date-picker");
const botonBuscar = document.getElementById("search-btn");

async function cargarAPOD(fecha = "") {
    try {

        mostrarError("");
        mostrarCargando(true);

        const apod = await obtenerAPOD(fecha);

        mostrarAPOD(apod);

    } catch (error) {

        mostrarError(
            "No fue posible obtener la información de la NASA."
        );

    } finally {

        mostrarCargando(false);
    }
}

botonBuscar.addEventListener("click", () => {

    const fechaSeleccionada = selectorFecha.value;

    const hoy =
        new Date()
            .toISOString()
            .split("T")[0];

    if (fechaSeleccionada > hoy) {

        mostrarError(
            "No puedes seleccionar una fecha futura."
        );

        return;
    }

    cargarAPOD(fechaSeleccionada);
});

document.addEventListener("DOMContentLoaded", () => {
    cargarAPOD();
    iniciarFavoritos(cargarAPOD);
});