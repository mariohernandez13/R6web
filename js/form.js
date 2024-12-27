// Validación del Formulario
document.getElementById("boton-send").addEventListener("click", validarForm);

function validarForm(event) {
    let nombre = document.getElementById("inputName4");
    let apellido = document.getElementById("inputSureName4");
    let numero = document.getElementById("inputNumber4");
    let email = document.getElementById("inputEmail4");
    let pais = document.getElementById("inputCountry4");
    let ciudad = document.getElementById("inputCity4");

    let seleccion = document.getElementById("inputSeleccion");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{9}$/;

    let valid = true;

    if (nombre.value.trim().length === 0) {
        nombre.style.border = "2px solid red";
        valid = false;
    } else {
        nombre.style.border = "";
    }

    if (apellido.value.trim().length === 0) {
        apellido.style.border = "2px solid red";
        valid = false;
    } else {
        apellido.style.border = "";
    }

    if (apellido.value.trim().length === 0) {
        ciudad.style.border = "2px solid red";
        valid = false;
    } else {
        ciudad.style.border = "";
    }

    if (apellido.value.trim().length === 0) {
        pais.style.border = "2px solid red";
        valid = false;
    } else {
        pais.style.border = "";
    }

    if (!regexTelefono.test(numero.value.trim())) {
        numero.style.border = "2px solid red";
        valid = false;
    } else {
        numero.style.border = "";
    }

    if (!regexEmail.test(email.value.trim())) {
        email.style.border = "2px solid red";
        valid = false;
    } else {
        email.style.border = "";
    }

    if (seleccion.value === "Seleccione Función") {
        seleccion.style.border = "2px solid red";
        valid = false;
    } else {
        seleccion.style.border = "";
    }

    if (!valid) {
        event.preventDefault();
    }
}