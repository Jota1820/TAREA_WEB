// 1. Botón de Alerta Personalizada
document.getElementById('btnAlerta').addEventListener('click', function() {
    alert('¡Hola! Has activado la funcionalidad de JavaScript con éxito. 🚀');
});

// 2. Validación del Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;
    let errorDiv = document.getElementById('errorMsg');

    // Limpiar mensaje previo
    errorDiv.innerHTML = "";

    // Validación simple
    if (nombre === "" || email === "" || mensaje === "") {
        errorDiv.innerHTML = " Por favor, rellena todos los campos obligatorios.";
        return;
    }

    if (!email.includes("@")) {
        errorDiv.innerHTML = " Por favor, introduce un correo válido.";
        return;
    }

    // Si todo está bien
    alert("¡Gracias por tu mensaje, " + nombre + "! Nos contactaremos pronto.");
    this.reset(); // Borra el formulario
}); 