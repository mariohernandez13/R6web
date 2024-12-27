// Filtrado con Isotope
$('.galeria-filtro ul li').click(function () {
    $('.galeria-filtro ul li').removeClass('active'); // quitamos el active de todos los elementos
    $(this).addClass('active'); // añade la clase active al elemento que clickamos

    var selector = $(this).attr('data-filer'); // obtiene el valor de filtrado del elemento
    $('.galeria-foto').isotope({
        filter: selector // aplica el filtrado para mostrar solo los elementos que coinciden con el filtro
    });
    return false; // previene comportamiento predeterminado (si hay)
});


// visor emergente con Magnific Popup
$(document).ready(function () {
    var popup_btn = $('.popup-btn'); //selecciona todos los elementos con la clase de popup
    popup_btn.magnificPopup({ // el tipo que mostramos serán imágenes
        type: 'image',
        gallery: {
            enabled: true // habilitamos la navegación en la galería
        } 
    });
});