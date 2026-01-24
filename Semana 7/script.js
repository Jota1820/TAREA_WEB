// 📦 Arreglo inicial de productos
let productos = [
  { nombre: "Laptop", precio: 800, descripcion: "Portátil básica" },
  { nombre: "Teléfono", precio: 500, descripcion: "Smartphone gama media" },
  { nombre: "Auriculares", precio: 50, descripcion: "Sonido estéreo" }
];

// 🔄 Función que muestra los productos en la lista
function mostrarProductos() {
  let lista = document.getElementById("lista-productos"); // Selecciona el <ul>
  lista.innerHTML = ""; // Limpia la lista antes de volver a renderizar
  productos.forEach(p => {
    // Agrega cada producto como <li> usando innerHTML
    lista.innerHTML += `<li><strong>${p.nombre}</strong> - $${p.precio} <br>${p.descripcion}</li>`;
  });
}

// ▶ Renderiza al cargar la página
mostrarProductos();

// ➕ Evento del botón para agregar un nuevo producto
document.getElementById("btn-agregar").addEventListener("click", () => {
  productos.push({ nombre: "Nuevo producto", precio: 100, descripcion: "Descripción genérica" }); // Añade al arreglo
  mostrarProductos(); // Vuelve a mostrar la lista actualizada
});
