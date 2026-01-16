// Capturar elementos
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("formulario");

// Función general para mostrar mensajes
function mostrarMensaje(campo, mensaje, valido) {
    const msg = document.getElementById("msg" + campo);
    const input = document.getElementById(campo.toLowerCase());
    msg.textContent = mensaje;
    if (valido) {
        input.classList.add("correcto");
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        input.classList.remove("correcto");
    }
}

// Validaciones
function checkNombre() {
    if (nombre.value.trim().length >= 3) {
        mostrarMensaje("Nombre", "", true);
        return true;
    } else {
        mostrarMensaje("Nombre", "Debe tener mínimo 3 letras.", false);
        return false;
    }
}

function checkCorreo() {
    const patron = /^[^@]+@[^@]+\.[a-z]{2,}$/;
    if (patron.test(correo.value)) {
        mostrarMensaje("Correo", "", true);
        return true;
    } else {
        mostrarMensaje("Correo", "Correo inválido.", false);
        return false;
    }
}

function checkClave() {
    const patron = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (patron.test(clave.value)) {
        mostrarMensaje("Clave", "", true);
        return true;
    } else {
        mostrarMensaje("Clave", "Debe tener 8 caracteres, un número y un símbolo.", false);
        return false;
    }
}

function checkConfirmar() {
    if (confirmar.value === clave.value && confirmar.value !== "") {
        mostrarMensaje("Confirmar", "", true);
        return true;
    } else {
        mostrarMensaje("Confirmar", "No coincide con la contraseña.", false);
        return false;
    }
}

function checkEdad() {
    if (parseInt(edad.value) >= 18) {
        mostrarMensaje("Edad", "", true);
        return true;
    } else {
        mostrarMensaje("Edad", "Debes tener 18 o más.", false);
        return false;
    }
}

// Activar botón si todo está correcto
function activarBoton() {
    if (checkNombre() && checkCorreo() && checkClave() && checkConfirmar() && checkEdad()) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

// Eventos
nombre.addEventListener("input", activarBoton);
correo.addEventListener("input", activarBoton);
clave.addEventListener("input", activarBoton);
confirmar.addEventListener("input", activarBoton);
edad.addEventListener("input", activarBoton);

// Enviar formulario
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Registro exitoso! 🎉");
});
