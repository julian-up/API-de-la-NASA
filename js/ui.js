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
    const video = document.createElement("video");
    video.src = data.url; //El enlace que incrusto para el video
    video.controls = true;
    video.height = "400";
    video.className = "w-100 rounded-4"
    media.appendChild(video);
  }else{
    const img = document.createElement("img");
      img.src = data.url;
      img.alt = data.title;
      img.className =  "img-fluid rounded-4"
      media.appendChild(img);
  }
}

export function obtenerApodActual() {
  return apodActual;
}

export function mostrarCargando(visible) {
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = visible ? "block" : "none";
}

export function mostrarError(mensaje) {
  const error = document.getElementById("message-box");
  if (error) {
    error.textContent = mensaje;
    error.style.display = mensaje ? "block" : "none";
  }
}
