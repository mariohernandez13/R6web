// JavaScript para resaltar el enlace activo
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre del archivo actual
    const currentPage = window.location.pathname.split("/").pop();

    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        // Comparar el href del enlace con el nombre del archivo actual
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
