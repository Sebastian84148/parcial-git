// Array de productos
const frutas = [
    { id : 1, nombre : "manzana", precio : 50, rutaImg : "img/manzana.jpg" },
    { id : 2, nombre : "uvas", precio : 40, rutaImg : "img/uvas.jpg" },
    { id : 3, nombre : "melon", precio : 20, rutaImg : "img/melon.jpg" },
    { id : 4, nombre : "frutilla", precio : 60, rutaImg : "img/frutilla.jpg" },
    { id : 5, nombre : "sandia", precio : 80, rutaImg : "img/sandia.jpg" },
    { id : 6, nombre : "anana", precio : 10, rutaImg : "img/anana.jpg" }
];

// 2025Div132Cuatri2_Progra3_Parcial1_nombreApellido\

//Variables
let contenedorFrutas = document.getElementById("contenedorFrutas");

let contenedorCarrito = document.getElementById("contenedorCarrito")

let barraBusqueda = document.getElementById("barraBusqueda");

if (localStorage.getItem("carrito") == null) {
    console.log("existe carrito");
}
else{
    console.log("no existe carrito");
    // let carrito = [];
}

function mostrarProductos(array) {
    let cartaProducto = "";
    array.forEach(fru => {
        cartaProducto += `
            <div class="card-producto">
                <img src="${fru.rutaImg}" alt="${fru.nombre}">
                <h3>${fru.nombre}</h3>
                <p>$ ${fru.precio}</p>
                <button onclick="agregarACarrito(${fru.id})">Agregar al carrito</button>
            </div>
            `;
    });

    contenedorFrutas.innerHTML = cartaProducto;
}

barraBusqueda.addEventListener("keyup", () => {
    filtrarProductos();
    alerta();
});

function alerta() {
    console.log("holis");
}

function filtrarProductos() {
    let valorBusqueda = barraBusqueda.value;
    
    console.log(valorBusqueda);

    let productosFiltrados = frutas.filter(fru => fru.nombre.includes(valorBusqueda));

    mostrarProductos(productosFiltrados);
}

function agregarACarrito(id) {
    console.log(`Id producto: ${id}`);

    let frutaSeleccionada = frutas.find(fru => fru.id === id);

    carrito.push(frutaSeleccionada);

    console.log(carrito);

    // localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}

function mostrarCarrito() {
    let cartaCarrito = "<ul>";

    carrito.forEach((elemento, i)  => {
        cartaCarrito += `
        <li class="bloque-item">
            <p class="nombre-item">${elemento.nombre} - $ ${elemento.precio}</p>
            <p class="nombre-item">${i}</p>
            <button class="boton-eliminar" onclick="eliminarElemento(${i})">Eliminar</button>
        </li>`;
    });
    
    cartaCarrito += "</ul><button onclick='vaciarCarrito()'>Vaciar Carrito </button>";

    contenedorCarrito.innerHTML = cartaCarrito;

    console.table(carrito);
    console.log(cartaCarrito);
}

function eliminarElemento(i) {
    console.log(`Indice del producto eliminado: ${i}`);

    carrito.splice(i, 1);

    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];

    contenedorCarrito.innerHTML = "";
}

function init() {
    mostrarProductos(frutas);
}

init();

//localStorage : es una API que permite almacenar datos de manera persistente en el navegador que tiene un tamaño maximo de 5 a 10mb por dominio

// Métodos de localStorage :
// 1. Guardar datos: localStorage.setItem(key, value)
// 2. Leer datos: localStorage.getItem(key)
// 3. Eliminar un dato: localStorage.removeItem(key)
// 4. Eliminar todos los datos: localStorage.clear()

localStorage.setItem("nombre", "Sebastian");

let localNombre = localStorage.getItem("nombre");

console.log(localNombre);

localStorage.setItem("tema", "oscuro");

localStorage.removeItem("tema");

localStorage.clear();

let jsonFrutas = JSON.stringify(frutas);

console.log(jsonFrutas);

let conversionFrutas = JSON.parse(jsonFrutas);

console.log(conversionFrutas);