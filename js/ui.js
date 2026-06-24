let apodActual = null;

export function mostrarAPOD(data) {
  apodActual = data;
  const titulo = document.getElementById("apod-title");
  const fecha = document.getElementById("apod-date");
  const media = document.getElementById("apod-media");
  const explicacion = document.getElementById("apod-explanation");
  titulo.textContent = data.title;
  fecha.textContent = data.date;
  explicacion.textContent = data.explanation;

  media.innerHTML = "";

  if (data.media_type === "video") {
    const iframe = document.createElement("iframe");
    iframe.src = data.url; //El enlace que incrusto para el video
    iframe.width = "100%";
    iframe.height = "400";
    iframe.allowFullscreen = true;
    media.appendChild(iframe);
  }
}

export function obtenerApodActual() {
  return apodActual;
}

export function mostrarCargando(visible) {
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = visible ? "block" : "none";
}

export function mostrarError() {
  const error = document.getElementById("error");
  if (error) {
    error.textContent = mensaje;
    error.style.display = mensaje ? "block" : "none";
  }
}
