// Capture form data
$(document).ready(function() {
  $("#pizzaCraft").submit(function(event) {
    // Added variable count for the pizzaCount
    var pizzaType, pizzaSize, pizzaCrust, pizzaToppings,pizzaCount;
    pizzaType = $("#pizzaType :selected");
    pizzaSize = $("#pizzaSize :selected");
    pizzaCrust = $("#pizzaCrust :selected");
    pizzaToppings = $("#pizzaToppings :checked");

    // Can't find an instance where I'll be needing to reuse the count object so I just called .val() on it
    pizzaCount = parseInt($("#pizzaCount input").val());

    // new pizza order
    var newOrder = new PizzaOrder(
      pizzaType,
      pizzaSize,
      pizzaCrust,
      pizzaToppings,
      pizzaCount
    );
    orderSummary(newOrder);

    event.preventDefault();
  });
});

// Create Pizza Constructor
// Actually it's a pizza
function PizzaOrder(type, size, crust, toppings, count) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.count = count;
}

// Add object method using prototype
PizzaOrder.prototype.orderPrice = function() {
  var typePrice, sizePrice, crustPrice, toppingsPrice;
  // typePrice = parseInt(this.type.val());
  sizePrice = parseInt(this.size.val());
  crustPrice = parseInt(this.crust.val());

  toppingsPrice = this.toppings.map(function() {
    return parseInt($(this).val());
  });
  let toppingsTotalPrice = 0;
  for (let i = 0; i < toppingsPrice.length; i++) {
    toppingsTotalPrice += toppingsPrice[i];
  }

  var orderPrice =
    (typePrice + sizePrice + crustPrice + toppingsTotalPrice) * this.count;

  return orderPrice;
};

function orderSummary(order) {
  alert([order.type, order.size, order.crust, order.toppings, order.count]);
}

//User Interface
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
  });

  //Reveal order summary upon clicking make order.
  $(".pizza-order").Click(function() {
    $(".orderSummary").show();
  });

  $(".Delivery").Click(function() {
    $(".customerContactDetails").show();
  });

  //Create summary
  $("#list").text(" ");
  $("#list")
    .append(
      "<br>" +
        "pizzaType :   " +
        newOrder.pizzaType +
        "<br>" +
        "Size :   " +
        newOrder.size +
        "<br>" +
        "Crust :     " +
        newOrder.crust +
        "<br>" +
        " count of pizzas :    " +
        newOrder.count +
        "<br>" +
        " Extra Toppings :    " +
        newOrder.toppings +
        "<br>" +
        "Total Price :  " +
        newOrder.TotalPrice +
        "<br><br>"
    )
    .css("font-family", "system-ui")
    .css("font-size", "24px");

  //Write to the order
  $(".summary").slideDown(+toppingsPrice0);
  $(".cdata-overlay").slideUp();
  $("#list").slideDown();
  $(".deliver").show(100 + toppingsPrice0);
  $(".delivernot").show(100 + toppingsPrice0);
});

let price, TotalPrice;
switch (pizzaType) {
  case (pizzaType =
    "Chicago-Pizza" || "NYC-Pizza" || "Neapolitan-Pizza" || "Pepperoni-Pizza"):
    switch (pizzaSize) {
      case (pizzaSize = "kidSize"):
        price = 800;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
      case (pizzaSize = "medium"):
        price = 100 + toppingsPrice0;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
      case (pizzaSize = "large"):
        price = 1 + toppingsPrice;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
      case (pizzaSize = "familySize"):
        price = 1400;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
    }
    break;
  case (pizzaType =
    "Hawaiian-Pizza" ||
    "Greek-Pizza" ||
    "Mediterranean-Pizza" ||
    "Tasty-tomato-Pizza"):
    switch (pizzaSize) {
      case (pizzaSize = "kidSize"):
        price = 500;
        if (crust === "Thin") {
          TotalPrice = price * count;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
      case (pizzaSize = "medium"):
        price = 700;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
      case (pizzaSize = "large"):
        price = 900;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
      case (pizzaSize = "familySize"):
        price = 1100 + toppingsPrice;
        if (crust === "Thin") {
          TotalPrice = price * count + toppingsPrice;
        } else if (crust === "Thick") {
          TotalPrice = price * count + 100 + toppingsPrice;
        } else if (crust === "Deep") {
          TotalPrice = price * count + 150 + toppingsPrice;
        } else {
          TotalPrice = price * count + 200 + toppingsPrice;
        }
        break;
    }
    break;
}
