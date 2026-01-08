// 1. Guardamos los elementos del HTML en variables para poder usarlos
var cajaTexto = document.getElementById('urlImagen');
var botonAgregar = document.getElementById('btnAgregar');
var botonEliminar = document.getElementById('btnEliminar');
var listaImagenes = document.getElementById('contenedorGaleria');

// Esta variable guardará la imagen que toquemos
var imagenElegida = null;

// --- FUNCIÓN PARA AGREGAR ---
botonAgregar.onclick = function() {
    // A. Creamos una etiqueta <img> nueva
    var foto = document.createElement('img');
    
    // B. Le ponemos la dirección (URL) que escribimos en el cuadro
    foto.src = cajaTexto.value;

    // C. Programamos qué pasa cuando alguien toque ESTA foto nueva
    foto.onclick = function() {
        // Si ya había otra foto marcada, le quitamos el borde azul
        if (imagenElegida != null) {
            imagenElegida.classList.remove('seleccionada');
        }
        
        // Marcamos la foto que tocamos con el borde azul
        foto.classList.add('seleccionada');
        
        // Guardamos esta foto en nuestra variable para saber cuál borrar después
        imagenElegida = foto;
    };

    // D. Metemos la foto en la galería y limpiamos el cuadro de texto
    listaImagenes.appendChild(foto);
    cajaTexto.value = "";
};

// --- FUNCIÓN PARA ELIMINAR ---
botonEliminar.onclick = function() {
    // Si tenemos una imagen elegida...
    if (imagenElegida != null) {
        // La borramos de la pantalla
        imagenElegida.remove();
        // Vaciamos la variable porque ya no existe la imagen
        imagenElegida = null;
    } else {
        alert("Por favor, haz clic en una imagen primero.");
    }
};

// --- ATAJO DE TECLADO ---
document.onkeydown = function(evento) {
    // Si presionas la tecla "Delete" (Suprimir)
    if (evento.key == "Delete") {
        if (imagenElegida != null) {
            imagenElegida.remove();
            imagenElegida = null;
        }
    }
};