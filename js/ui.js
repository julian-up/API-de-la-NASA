<<<<<<< HEAD
export function renderApod(container, apod) {
    const mediaContent =
        apod.media_type === "image"
            ? `
            <img
                src="${apod.url}"
                alt="${apod.title}"
                class="img-fluid rounded">
            `
            : `
                <iframe
                    src="${apod.url}"
                    width="100%"
                    height="500">
                </iframe>
            `;
    container.innerHTML = `
        <div class="card shadow">

            <div class="card-body">

                <h2>${apod.title}</h2>

                <p>
                    <strong>Fecha:</strong>
                    ${apod.date}
                </p>

                ${mediaContent}

                <p class="mt-3">
                    ${apod.explanation}
                </p>

            </div>

        </div>
    `;
}

export function renderFavorites(
    favorites,
    container,
    onSelectFavorite
) {

    container.innerHTML = "";

    favorites.forEach(apod => {

        const item =
            document.createElement("li");

        item.className =
            "list-group-item list-group-item-action";

        item.textContent =
            `${apod.date} - ${apod.title}`;

        item.addEventListener(
            "click",
            () => onSelectFavorite(apod)
        );

        container.appendChild(item);
    });
}
=======
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
>>>>>>> JulianMalpica
