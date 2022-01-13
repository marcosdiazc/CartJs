let carrito = [];

$(document).ready(function() {
    renderizarProductos();
    
});

function renderizarProductos() {
    for (const producto of productos) {
        $(".milista").append(`<li class="list-group-item">
        <h3>ID: ${producto.id}</h3>
        <img src="${producto.foto}" width="250" height="250">
        <p>Producto: ${producto.nombre}</p>
        <h4>Precio $ ${producto.precio}</h4>
        <button class="btn btn-danger" id="btn${producto.id}">COMPRAR</button>
        </li>`);
        //Eventos para cada boton
        $(`#btn${producto.id}`).on('click',function(){
            agregarACarrito(producto);
        });

    }
}

function agregarACarrito(prodAAgregar) {
    carrito.push(prodAAgregar);
    console.log(carrito);
    calcularTotalCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
    swal.fire(
        'Nuevo producto agregado al carrito',
        prodAAgregar.nombre,
        'success'
    )
   
}

function calcularTotalCarrito(){
    let total=0;
    for(const prod of carrito){
        total+=prod.precio;
        console.log(total);
    }
    tituloPrecio.innerText=total;
    tituloTotalUnidades.innerText=carrito.length;
}


/////////////////////////////////////////////////////////////////////////////////////////////

let tituloTotalCompra = document.createElement("h3");
tituloTotalCompra.innerText = "Total de la compra";
document.body.appendChild(tituloTotalCompra);

let tituloPrecio = document.createElement("h3");
tituloPrecio.innerText = "0";
document.body.appendChild(tituloPrecio);

let tituloCantidad = document.createElement("h3");
tituloCantidad.innerText = "Cantidad de productos: ";
document.body.appendChild(tituloCantidad);

let tituloTotalUnidades = document.createElement("h3");
tituloTotalUnidades.innerText = "0";
document.body.appendChild(tituloTotalUnidades);


let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
document.body.appendChild(botonFinalizar);
botonFinalizar.onclick=()=>{
    const precioFinal=tituloPrecio.innerText;
    swal.fire(
        'Finalizando la compra, total abonar $',
        precioFinal,
        'success'
        )
    
}







    




