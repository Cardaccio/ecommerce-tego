//Busqueda de productos
let precio = "$1200,00";

var data = [
  {
    "model": "Green Print",
    "price": `${precio}`,
    "image": "img/green-print.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Happiness",
    "price": `${precio}`,
    "image": "img/happiness.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Human",
    "price": `${precio}`,
    "image": "img/human.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Berry Bone",
    "price": `${precio}`,
    "image": "img/berry-bone.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Berry Paw",
    "price": `${precio}`,
    "image": "img/berry-paw.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Black Bone",
    "price": `${precio}`,
    "image": "img/black-bone.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Black Paw",
    "price": `${precio}`,
    "image": "img/black-paw.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Boy Bone",
    "price": `${precio}`,
    "image": "img/boy-bone.jpg",
    "gender": "Boy"
  },
  {
    "model": "Chic",
    "price": `${precio}`,
    "image": "img/chic.jpg",
    "gender": "Girl"
  },
  {
    "model": "Cool Boy",
    "price": `${precio}`,
    "image": "img/cool-boy.jpg",
    "gender": "Boy"
  },
  {
    "model": "Cool Girl",
    "price": `${precio}`,
    "image": "img/cool-girl.jpg",
    "gender": "Girl"
  },
  {
    "model": "Love Mom",
    "price": `${precio}`,
    "image": "img/love-mom.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Love Dad",
    "price": `${precio}`,
    "image": "img/love-dad.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Cute Queen",
    "price": `${precio}`,
    "image": "img/cute-queen.jpg",
    "gender": "Girl"
  },
  {
    "model": "Forest Patrol",
    "price": `${precio}`,
    "image": "img/forest-patrol.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Girl",
    "price": `${precio}`,
    "image": "img/girl.jpg",
    "gender": "Girl"
  },
  {
    "model": "Planets",
    "price": `${precio}`,
    "image": "img/galaxy.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Kitty",
    "price": `${precio}`,
    "image": "img/kitty.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Girl Bone",
    "price": `${precio}`,
    "image": "img/girl-bone.jpg",
    "gender": "Girl"
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
  },
  {
    "model": "Jaguar",
    "price": `${precio}`,
    "image": "img/jaguar.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Killer Squad",
    "price": `${precio}`,
    "image": "img/killer-squad.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Kiss Me",
    "price": `${precio}`,
    "image": "img/kiss-me.jpg",
    "gender": "Girl"
  },
  {
    "model": "Love Pink",
    "price": `${precio}`,
    "image": "img/love-pink.jpg",
    "gender": "Girl"
  },
  {
    "model": "Love",
    "price": `${precio}`,
    "image": "img/love.jpg",
    "gender": "Girl"
  },
  {
    "model": "Navy Patrol",
    "price": `${precio}`,
    "image": "img/navy-patrol.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Navy Paw",
    "price": `${precio}`,
    "image": "img/navy-paw.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Need Me",
    "price": `${precio}`,
    "image": "img/need.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Pet Squad",
    "price": `${precio}`,
    "image": "img/pet-squad.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Porky",
    "price": `${precio}`,
    "image": "img/porky.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Pride",
    "price": `${precio}`,
    "image": "img/pride.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Tactical Green",
    "price": `${precio}`,
    "image": "img/tactical-green.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Tactical-Orange",
    "price": `${precio}`,
    "image": "img/tactical-orange.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Hamsa",
    "price": `${precio}`,
    "image": "img/hamsa.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Violet Print",
    "price": `${precio}`,
    "image": "img/violet-print.jpg",
    "gender": "Unisex"
  },
  {
    "model": "The Eye",
    "price": `${precio}`,
    "image": "img/the-eye.jpg",
    "gender": "Girl"
  },
  {
    "model": "Thunder",
    "price": `${precio}`,
    "image": "img/thunder.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Galaxy",
    "price": `${precio}`,
    "image": "img/universe.jpg",
    "gender": "Unisex"
  },
  {
    "model": "Yummy",
    "price": `${precio}`,
    "image": "img/yummy.jpg",
    "gender": "Unisex"
  },
];

var products = "",
  genders = "",
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
  <a href="${image}" class="with-caption image-link" title="${model}"><img class="img-fluid img-top" src="${image}" alt="chapita ${model}"></a>
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
    //create dropdown of gender
    if (genders.indexOf("<option value='" + gender + "'>" + gender + "</option>") == -1) {
      genders += "<option value='" + gender + "'>" + gender + "</option>";
    }

}

$("#products").html(products);
$(".filter-model").append(models);
$(".filter-price").append(prices);
$(".filter-gender").append(genders);
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


//Zoom a la imagen

$('a').magnificPopup({
  type: 'image',
  closeBtnInside: false,
  closeOnContentClick: false,

  callbacks: {
    open: function() {
      var self = this;
      self.wrap.on('click.pinhandler', 'img', function() {
        self.wrap.toggleClass('mfp-force-scrollbars');
      });
    },
    beforeClose: function() {
          this.wrap.off('click.pinhandler');
      this.wrap.removeClass('mfp-force-scrollbars');
    }
  },
   
  image: {
    verticalFit: false
  }

});