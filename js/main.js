// VARIABLES
const contenedorProductos = document.querySelector('.stock__productos');
const contenedorCarrito = document.querySelector('.carrito__container');
const limpiarCarrito = document.querySelector('.limpiar');
const cantidadCarrito = document.querySelector('.carrito__cantidad');
const totalCarrito = document.querySelector('.carrito__total');

let carrito = [];

// EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

limpiarCarrito.addEventListener('click', limpiarElCarrito);


// FUNCIONES
showCartAlert = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500
    })          
    Toast.fire({
        icon: 'success',
        title: 'Se Agrego al Carrito'
    })
}

mostrarProductos = () => {
    for (const producto of stockProductos) {
        const divProducto = document.createElement('div');
        divProducto.classList.add('stock__card');

        const imgProducto = document.createElement('img');
        imgProducto.classList.add('stock__card--image');
        imgProducto.src = producto.img;

        const nombreProducto = document.createElement('h2');
        nombreProducto.classList.add('stock__card--nombre');
        nombreProducto.textContent = producto.name;

        const btnAgregarProducto = document.createElement('button');
        btnAgregarProducto.classList.add('stock__card--btn');
        btnAgregarProducto.textContent = `$${producto.price}`;
        btnAgregarProducto.onclick = () => {
            agregarAlCarrito(producto.id);  
            showCartAlert();
        }
        
        divProducto.appendChild(imgProducto);
        divProducto.appendChild(nombreProducto);
        divProducto.appendChild(btnAgregarProducto);

        contenedorProductos.appendChild(divProducto);
    }
}



agregarAlCarrito = (id) => {
    
    const productosAgregados = stockProductos.find( producto => producto.id === id);
    carrito.push(productosAgregados);
    mostrarCarrito(carrito);
    precioTotal();

    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    
}

recuperarLocalStorage = () => {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if (recuperarLS){
        recuperarLS.forEach(element => (
            agregarAlCarrito(element.id)
        ))
    }
}
recuperarLocalStorage();

function mostrarCarrito () {

    contenedorCarrito.innerHTML = "";
    for (const producto of carrito) {
        const divCard = document.createElement('div');
        divCard.classList.add('carrito__card');

        const imgProducto = document.createElement('img');
        imgProducto.classList.add('carrito__card--image');
        imgProducto.src = producto.img;

        const divClass = document.createElement('div');
        divClass.classList.add('carrito__card--card');

        const nombreProducto = document.createElement('h2');
        nombreProducto.classList.add('carrito__card--nombre');
        nombreProducto.textContent = producto.name;

        const typeProducto = document.createElement('p');
        typeProducto.classList.add('carrito__card--type');
        typeProducto.textContent = producto.type;

        const priceProducto = document.createElement('p');
        priceProducto.classList.add('carrito__card--price');
        priceProducto.textContent = `$${producto.price}`;

        
        
        divCard.appendChild(imgProducto);
        divCard.appendChild(divClass);
        divClass.appendChild(nombreProducto);
        divClass.appendChild(typeProducto);
        divClass.appendChild(priceProducto);

        contenedorCarrito.appendChild(divCard);
    }
}
function precioTotal() {
    let cantidadDeProductos =  carrito.length;
    let sumarProductos = carrito.reduce((acumulador, e) => acumulador + e.price, 0);
    console.log(cantidadDeProductos);
    console.log(sumarProductos);
    
    cantidadCarrito.textContent = `Productos: ${cantidadDeProductos}`;
    totalCarrito.textContent = `TOTAL: $${sumarProductos}`;
}
function limpiarElCarrito () {
    contenedorCarrito.innerHTML = "";
    carrito = [];
    cantidadCarrito.textContent = `Productos: 0`;
    totalCarrito.textContent = ` `;

    localStorage.clear();
}



/*

let cantidad = 0
let carrito = ""
let continuar = ""
let precioFinal = 0

class Productos {
    constructor(id, nombre, precio, talle, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.talle = talle;
        this.categoria = categoria;
        this.stock = stock;
        this.vendido = false;
    }
}


//Esta funcion muestra los agregados al carrito y la cantidad de unidades
const productosAgregados = function () {
    console.log(`Agregaste ${carrito} x ${cantidad} a tu carrito.`);
}

//Esta funcion permite especificar cuantas unidades del producto quieres agregar al carrito
const cantidadUnidades = () => {
    cantidad = Number(prompt("¿Cuantas unidades te gustaría agregar?"));
}

//Esta funcion muestra el nombre del producto y el precio correspondiente a cada uno
const mostrarStockCompleto = () => {
    for (const Producto of stockProductos) {
        console.log(Producto.nombre + " $" + Producto.precio);
    }
}

//Esta funcion permite al usuario mediante un prompt preguntar si el producto esta o no en stock
const existe = () => {
    let pregunta = prompt("¿Que producto quieres averiguar?");
    let existe = stockProductos.some((el) => el.nombre == pregunta);
    if (existe == true) {
        console.log(`${pregunta} está en stock`);
    } else if (existe != true) {
        console.log(`Ese producto no está en nuestro catalogo`);
    }
}

mostrarStockCompleto();


do {
    let inicio = prompt("¿Elije una opción: \n\n1. Compra \n2. Buscar Producto \n3. Limpiar Carrito");
    switch (inicio) {
        case "1":
            do {
                carrito = prompt("¿Que quieres agregar al carrito?");
                switch (carrito) {
                    case "gorra":
                        cantidadUnidades();
                        precioFinal += 15 * cantidad;
                        productosAgregados();
                        break
                    case "remera":
                        cantidadUnidades();
                        precioFinal += 35 * cantidad;
                        productosAgregados();
                        break
                    case "buzo":
                        cantidadUnidades();
                        precioFinal += 60 * cantidad;
                        productosAgregados();
                        break
                    case "campera":
                        cantidadUnidades();
                        precioFinal += 110 * cantidad;
                        productosAgregados();
                        break
                    case "pantalon":
                        cantidadUnidades();
                        precioFinal += 75 * cantidad;
                        productosAgregados();
                        break
                    case "sneakers":
                        cantidadUnidades();
                        precioFinal += 90 * cantidad;
                        productosAgregados();
                        break
                    default:
                        alert("Ingresa un producto valido.");
                        break
                }
                continuar = prompt("¿Quiere agregar algo más? \n\nSi \nNo");
            } while (continuar == "si")
            alert(`El precio final es de: USD ${precioFinal}`);
            console.log(`El precio final es de: USD ${precioFinal}`); //Suma total del precio de todos lo productos agregados al carrito
            break
        case "2":
            do {
                existe();
                continuar = prompt("¿Quieres averiguar otro producto? \n\nSi \nNo")
            } while (continuar == "si")
        case "3":
            console.clear();
            mostrarStockCompleto();
            break
        default:
            alert("Ingresa una opción válida");
            break
    }
    continuar = prompt("¿Quieres hacer algo mas? \n\nSi \nNo.");
} while (continuar == "si")

*/