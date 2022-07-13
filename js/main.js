
$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;


  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };

  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  $(document).ready(function () {

    $('html, body').hide();

    if (window.location.hash) {

      setTimeout(function () {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

          scrollTop: $(window.location.hash).offset().top

        }, 1000)

      }, 0);

    }

    else {

      $('html, body').show();

    }

  });


  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })


  $('.active-course-carusel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    navText: ["<span class='lnr lnr-arrow-up'></span>",
      "<span class='lnr lnr-arrow-down'></span>"],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      }

    }
  });

  $('.active-tstimonial-carusel').owlCarousel({
    items: 3,
    margin: 30,
    autoplay: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      }

    }
  });


  $("tr:visible").each(function (index) {
    $(this).css("background-color", !!(index & 1) ? "rgba(0,0,0,.05)" : "rgba(0,0,0,0)");
  });

  //  Start Google map 

  // When the window has finished loading create our google map below

  if (document.getElementById("map")) {

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
      });
    }
  }


  $(document).ready(function () {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });




});

//popovers

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})

//Busqueda de productos
let precio = "$690,00";

var data = [
  {
    "model": "Bone",
    "price": `${precio}`,
    "image": "img/Bone.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Girl",
    "price": `${precio}`,
    "image": "img/girl.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Galaxy",
    "price": `${precio}`,
    "image": "img/galaxy.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Green Bone",
    "price": `${precio}`,
    "image": "img/green-bone.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Arrived",
    "price": `${precio}`,
    "image": "img/arrived.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Bad Boy",
    "price": `${precio}`,
    "image": "img/bad-boy.jpg",
    "gender": "Boy"
  },
  {
    "model": "Boy",
    "price": `${precio}`,
    "image": "img/boy.jpg",
    "gender": "Boy"
  },
  {
    "model": "Flowers",
    "price": `${precio}`,
    "image": "img/flowers.jpg",
    "gender": "Girl"
  }
];

var products = "",
  gender = "",
  models = "",

  prices = "";

for (var i = 0; i < data.length; i++) {
  var
    model = data[i].model,
    gender = data[i].gender,
    price = data[i].price,
    rawPrice = price.replace("$", ""),
    rawPrice = parseFloat(rawPrice.replace(",", ".")),
    image = data[i].image;

  //create product cards
  products += `<div class="col-lg-3 col-md-6 product" data-model='${model}' data-price='${rawPrice}' data-gender='${gender}'><div class="single-unique-product" >
  <img class="img-fluid" src="${image}" alt="chapita ${model}">
  <div class="desc">
    <h4>${model}</h4>
    <h6>$<span>${rawPrice.toFixed(2)}</span></h6>
    <a tabindex="-2" class="text-uppercase primary-btn btn-compra popover-dismiss" type="button" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="Agregado al carrito!">Comprar</a>
  </div>
</div></div>`;

  //create dropdown of prices
  if (prices.indexOf("<option value='" + rawPrice + "'>" + rawPrice + "</option>") == -1) {
    prices += "<option value='" + rawPrice + "'>" + rawPrice + "</option>";
  }

  //create dropdown of models
  if (models.indexOf("<option value='" + model + "'>" + model + "</option>") == -1) {
    models += "<option value='" + model + "'>" + model + "</option>";
  }

}

$("#products").html(products);
$(".filter-model").append(models);
$(".filter-price").append(prices);
var filtersObject = {};

//on filter change
$(".filter").on("change", function () {
  var filterName = $(this).data("filter"),
    filterVal = $(this).val();

  if (filterVal == "") {
    delete filtersObject[filterName];
  } else {
    filtersObject[filterName] = filterVal;
  }

  var filters = "";

  for (var key in filtersObject) {
    if (filtersObject.hasOwnProperty(key)) {
      filters += "[data-" + key + "='" + filtersObject[key] + "']";
    }
  }

  if (filters == "") {
    $(".product").show();
  } else {
    $(".product").hide();
    $(".product").hide().filter(filters).show();
  }
});

//on search form submit
$("#search-form").submit(function (e) {
  e.preventDefault();
  var query = $("#search-form input").val().toLowerCase();

  $(".product").hide();
  $(".product").each(function () {
    var
      model = $(this).data("model").toLowerCase();

    if (model.indexOf(query) > -1) {
      $(this).show();
    }
  });
});



//Compra de productos

let btnsCompra = document.querySelectorAll('.btn-compra');

let carrito = [];
let carrito_storage = [];
let acuProducto = 0;
let prodEnCart; 

for (let boton of btnsCompra) {

  boton.addEventListener("click", agregar_carrito);
}


function agregar_carrito(e) {

  let div = e.target.parentNode.parentNode;
  let nombre_producto = div.querySelector("h4").textContent;

  let img = div.querySelector("img").src;

  let precio = div.querySelector("span").textContent;

  let itemQty = 1;

  let total = precio * itemQty;
  let producto;
  acuProducto++;
  prodEnCart = acuProducto;

  if (carrito.some(producto => producto.img === img)) {
    itemQty++;
    //Algo que busque el item y le aumente la cantidad
  } else {
    producto = {
      id: acuProducto,
      nombre: nombre_producto,
      img: img,
      precio: parseFloat(precio),
      cantidad: itemQty,
      total: total
    };

    carrito.push(producto);
    mostrar_carrito(producto);
    let divCant = document.getElementById('muestraCant');
    let pCant = document.getElementById('pCantProd');

    divCant.classList.remove('d-none');
    pCant.innerText = acuProducto;
  }
  /*
  let producto = {
    id: acuProducto,
    nombre: nombre_producto,
    img: img,
    precio: parseFloat(precio),
    cantidad: itemQty,
    total: total
  };

  carrito.push(producto);
  */

  let producto_JSON = JSON.stringify(producto);
  carrito_storage.push(producto_JSON);

  //localStorage.setItem("carritoTego", carrito_storage);
}

function mostrar_carrito(producto) {
  let fila = document.createElement("tr");
  fila.classList.add('fila-carrito');

  let filaCarrito = `<th scope='row' class="d-none d-sm-table-cell">${producto.id}</th><td><a href='#' class='text-danger delete-item'><span class='lnr lnr-trash'></span></a></td><td><img src='${producto.img}' class='img-fluid' width='35' alt='${producto.nombre}'></td><td class="d-none d-sm-table-cell">${producto.nombre}</td><td><div class='form-group mb-0'><input type='number' class='form-control cart-qty' name='cartQty' id='cartQty' value='${producto.cantidad}'></div></td><td>$<span class='product-value'>${producto.precio}</span></td><td class='text-right'>$ <span class = 'product-total'>${producto.total}</span></td>`;
  fila.innerHTML = filaCarrito;

  let body_tabla = document.getElementById("cartContent");

  body_tabla.append(fila);

  let space = / /ig;
  filaClean = filaCarrito.replaceAll(space, "%");


  let filaJson = JSON.stringify(filaClean);

  carrito_storage.push(filaJson);
  localStorage.setItem("compra", (carrito_storage));




  calcularTotal();

}

//Popular carrito

function popular_carrito() {

  let body_tabla = document.getElementById("cartContent");
  let fila;

  let carrito = JSON.parse(localStorage.getItem("compra"));
  const carritoClean = carrito ? [carrito] : [];
  console.log(carrito)

  for (let row of carritoClean) {
    let quitaBarra = row.replaceAll("%", " ");
    console.log(quitaBarra);
    fila = document.createElement("tr");
    fila.classList.add('fila-carrito');
    fila.innerHTML = quitaBarra;

  }
  body_tabla.append(fila);


  calcularTotal();
}
if (localStorage.getItem('compra')) {
  //popular_carrito();
}


//cambiar cantidad de total
let btnCarrito = document.getElementById('carritoPage');
btnCarrito.addEventListener('click', select_select);

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
  let divCant = document.getElementById('muestraCant');
  let pCant = document.getElementById('pCantProd');
  
  prodEnCart--;
  if(prodEnCart<=0){
    divCant.classList.add('d-none');
    acuProducto=0;
  }
  
  pCant.innerText = prodEnCart;


  let row = e.target.parentNode.parentNode.parentNode;
  row.remove();
  calcularTotal();
};
