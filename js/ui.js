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