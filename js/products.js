//Busqueda de productos
let precio = "$990,00";

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