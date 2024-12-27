const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = 320; // Ancho de cada tarjeta

// Duplicar las tarjetas
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

let currentSlide = 0;

setInterval(() => {
    currentSlide++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Cuando llega al final de las tarjetas originales, reinicia
    if (currentSlide >= slides.length) {
        setTimeout(() => {
            track.style.transition = 'none'; // Desactiva la transición para el reinicio
            currentSlide = 0;
            track.style.transform = `translateX(0px)`;
        }, 500); // Espera a que termine la transición actual
    }
}, 2800);

// Cerrar banner de anuncio
let cerrar = false;
document.getElementById('close-anuncio').addEventListener('click', function () {
    if (!cerrar) {
        document.getElementById('anuncio').style.display = 'none';
        cerrar = true;
    }
});



