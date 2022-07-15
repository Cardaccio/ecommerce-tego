//Compra de productos

let btnsCompra = document.querySelectorAll('.btn-compra');

let carrito = [];
let acuProducto = 0;


for (let boton of btnsCompra) {

    boton.addEventListener("click", agregar_carrito);
}

class prodCarrito {
    constructor(acuProducto, nombre_producto, img, precio, itemQty, total) {
        this.id = acuProducto;
        this.nombre = nombre_producto;
        this.img = img;
        this.precio = precio;
        this.cantidad = itemQty;
        this.total = total
    };
};

function agregar_carrito(e) {

    let carritoStorage = JSON.parse(sessionStorage.getItem('carritoTego'))
    if (carritoStorage) {
        carrito = carritoStorage
    }

    let div = e.target.parentNode.parentNode;
    let nombre_producto = div.querySelector("h4").textContent;
    let img = div.querySelector("img").src;
    let precio = parseFloat(div.querySelector("span").textContent);
    let itemQty = 1;
    let total = precio * itemQty;

    acuProducto++;


    let index = carrito.findIndex(producto => producto.img == img)

    if (index == -1) {
        const producto = new prodCarrito(acuProducto, nombre_producto, img, precio, itemQty, total)
        //alamceno en variable
        carrito.push(producto);
        //Funcion para agregar al modal
        mostrar_carrito(producto);

        //Circulo rojo de productos en el carrito.
       redCircle();

    } else {
        carrito[index].cantidad++;
        carrito[index].total = carrito[index].precio * carrito[index].cantidad;

    }

    //Guardo en Local storage
    sessionStorage.setItem("carritoTego", JSON.stringify(carrito));
}

//Circulo rojo de productos en el carrito.
function redCircle() {

    let divCant = document.getElementById('muestraCant');
    let pCant = document.getElementById('pCantProd');

    divCant.classList.remove('d-none');
    pCant.innerText = acuProducto;
    
    if (carrito.length <= 0) {
        divCant.classList.add('d-none');
        acuProducto = 0;
    }
}

function mostrar_carrito(producto) {
    let fila = document.createElement("tr");
    fila.classList.add('fila-carrito');

    let filaCarrito = `<th scope='row' class="d-none d-sm-table-cell">${producto.id}</th><td><a href='#' class='text-danger delete-item'><span class='lnr lnr-trash'></span></a></td><td><img src='${producto.img}' class='img-fluid' width='35' alt='${producto.nombre}'></td><td class="d-none d-sm-table-cell">${producto.nombre}</td><td><div class='form-group mb-0'><input type='number' class='form-control cart-qty' name='cartQty' id='cartQty' value='${producto.cantidad}'></div></td><td>$<span class='product-value'>${producto.precio}</span></td><td class='text-right'>$ <span class = 'product-total'>${producto.total}</span></td>`;
    fila.innerHTML = filaCarrito;

    let body_tabla = document.getElementById("cartContent");

    body_tabla.append(fila);

    calcularTotal();

}

//Popular carrito desde sessionStorage
if (sessionStorage.getItem('carritoTego')) {
    popular_carrito();
}

function popular_carrito() {

    let carritoStorage = JSON.parse(sessionStorage.getItem('carritoTego'))
    if (carritoStorage) {
        carrito = carritoStorage
        for (let item of carrito) {
            mostrar_carrito(item)
            acuProducto++;
        }
    }

    redCircle();
    calcularTotal();
}




//cambiar cantidad de items elegidos

let btnCarrito = document.getElementById('carritoPage');
btnCarrito.addEventListener('click', select_select);

//Busqueda de botones en el carrito
function select_select() {
    let cantProd = document.querySelectorAll("input[name=cartQty]");
    for (let input of cantProd) {
        input.addEventListener("change", cambiar_cantidad_total);

    };
    let botones_borrar = document.querySelectorAll(".delete-item");

    for (let boton of botones_borrar) {

        boton.addEventListener("click", borrar_producto);
    };
};

select_select();

function cambiar_cantidad_total(e) {
    let row = e.target.parentNode.parentNode.parentNode;

    let cantProducto = row.querySelector('input[name=cartQty]').value;
    let valorProd = parseFloat(row.querySelector(".product-value").textContent);
    let valorTotal = row.querySelector(".product-total");

    valorTotal.innerText = `${(valorProd * cantProducto).toFixed(2)}`;

    //camibar cantidad en storage
    let carritoStorage = JSON.parse(sessionStorage.getItem('carritoTego'))

    let name = row.querySelector("img").alt;
    let index = carritoStorage.findIndex(producto => producto.nombre == name)
    carritoStorage[index].cantidad = cantProducto;
    carritoStorage[index].total = valorProd * cantProducto;

    //Guardo en Local storage
    sessionStorage.setItem("carritoTego", JSON.stringify(carrito));
    calcularTotal();

};

//Total del carrito

function calcularTotal() {
    let subtotal = document.getElementById("cart-subtotal");
    let envio = parseFloat(document.getElementById("monto-envio").textContent);
    let totalFinal = document.getElementById("cart-total");

    let valoresTotales = document.querySelectorAll(".product-total");
    let acuProducto = [];
    let sumaProducto = 0;
    for (let precio of valoresTotales) {
        acuProducto.push(parseFloat(precio.textContent))
    }
    function sumaArray(array) {
        for (let i = 0; i < array.length; i++) {
            sumaProducto += array[i];
        }
    }
    sumaArray(acuProducto);
    subtotal.innerText = `${sumaProducto.toFixed(2)}`;
    totalFinal.innerText = `${(sumaProducto + envio).toFixed(2)}`;
};


//Eliminar producto del carrito
let botones_borrar = document.querySelectorAll(".delete-item");

for (let boton of botones_borrar) {

    boton.addEventListener("click", borrar_producto);
};

function borrar_producto(e) {

    let row = e.target.parentNode.parentNode.parentNode;
    acuProducto--;
    redCircle();
    row.remove();
    calcularTotal();
};


//Guardar carrito y pagar

let btnGuardar = document.getElementById('saveCart');
let btnPagar = document.getElementById('payCart');

btnGuardar.addEventListener("click", guardar_carrito);
btnPagar.addEventListener('click', ir_a_pagar);

function guardar_carrito(carrito){
    (carrito) => localStorage.setItem("carritoTego", JSON.stringify(carrito))
    Swal.fire({
        title: 'Estas segurx?',
        text: "Guardaremos tu compra hasta tu proxima visita.",
        icon: 'warning',
        imageUrl: '../img/catNo.gif',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, guardar.',
        cancelButtonText: 'Cancelar',

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Carrito guardado!',
            'Esperamos verte de nuevo por aqui.',
            'success'
          )
          vaciar_carrito();
        }
      })
}

function vaciar_carrito(){

    $("#cartContent tr").remove();
    let divCant = document.getElementById('muestraCant');
    divCant.classList.add('d-none');
}

function ir_a_pagar(){
    localStorage.clear();
    sessionStorage.clear();
};