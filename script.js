document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("map-selector");
    const iframe = document.getElementById("html-display");
    const img = document.getElementById("image-display");
    const loading = document.getElementById("loading");

    selector.addEventListener("change", (e) => {
        // Obtener la opción seleccionada
        const selectedOption = e.target.options[e.target.selectedIndex];
        const src = selectedOption.value;
        const type = selectedOption.getAttribute("data-type");

        // Mostrar indicador de carga
        loading.classList.remove("hidden");

        if (type === "html") {
            img.classList.add("hidden");
            iframe.classList.remove("hidden");
            iframe.src = src;

            // Ocultar carga cuando el iframe termine de cargar
            iframe.onload = () => {
                loading.classList.add("hidden");
            };
        } else if (type === "image") {
            iframe.classList.add("hidden");
            img.classList.remove("hidden");
            img.src = src;

            // Ocultar carga cuando la imagen termine de cargar
            img.onload = () => {
                loading.classList.add("hidden");
            };
        }
    });
});
