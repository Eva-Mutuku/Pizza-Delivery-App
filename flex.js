// Capture form data
$(document).ready(function() {
  $("#pizzaCraft").submit(function(event) {
    event.preventDefault();

    $(".orderSummary").show();
    // Added variable count for the pizzaCount
    var pizzaType, pizzaSize, pizzaCrust, pizzaToppings, pizzaCount;
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
  var toppingsPrice;
  // typePrice = parseInt(this.type.val());
  // sizePrice = parseInt(this.size.val());
  // crustPrice = parseInt(this.crust.val());
  toppingsPrice = this.toppings.map(function() {
    return parseInt($(this).val());
  });
  let toppingsTotalPrice = 0;
  for (let i = 0; i < toppingsPrice.length; i++) {
    toppingsTotalPrice += toppingsPrice[i];
  }

  // var pizzaTypes = {
  //   meat: ["Chicago-Pizza", "NYC-Pizza", "Neapolitan-Pizza", "Pepperoni-Pizza"],
  //   veggie: [
  //     "Hawaiian-Pizza",
  //     "Greek-Pizza",
  //     "Mediterranean-Pizza",
  //     "Tasty-tomato-Pizza"
  //   ]
  // };
  // var pizzaSizes = {
  //   meat: { kidSize: 800, medium: 1000, large: 1200, familySize: 1400 },
  //   veggie: { kidSize: 500, medium: 700, large: 900, familySize: 1100 }
  // };
  // var pizzaCrusts = {
  //   thin: 0,
  //   thick: 100,
  //   deep: 150,
  //   stuffed: 200
  // };

  // if (
  //   pizzaTypes.meat.includes(this.type.val()) ||
  //   pizzaTypes.veggie.includes(this.type.val())
  // ) {
  //   if (this.size in pizzaSizes.meat || this.size in pizzaSizes.veggie) {
  //     TotalPrice = pizzaSizes[this.type.val()] +
  //   }
  // }
  let price, TotalPrice;
  switch (this.type.val()) {
    case (this.type.val() ===
      "Chicago-Pizza" ||
      "NYC-Pizza" ||
      "Neapolitan-Pizza" ||
      "Pepperoni-Pizza"):
      switch (this.size.val()) {
        case this.size.val() === "kidSize":
          price = 800;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
        case this.size.val() === "medium":
          price = 1000 + toppingsTotalPrice;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
        case this.size.val() === "large":
          price = 1200 + toppingsTotalPrice;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
        case this.size.val() === "familySize":
          price = 1400;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
      }
      break;
    case (this.type.val() === "Hawaiian-Pizza" ||
      "Greek-Pizza" ||
      "Mediterranean-Pizza" ||
      "Tasty-tomato-Pizza"):
      switch (this.size.val()) {
        case (this.size.val() = "kidSize"):
          price = 500;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
        case this.size.val() === "medium":
          price = 700;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
        case this.size.val() === "large":
          price = 900;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
        case this.size.val() === "familySize":
          price = 1100 + toppingsTotalPrice;
          if (this.crust.val() === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
          } else if (this.crust.val() === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
          } else if (this.crust.val() === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
          }
          break;
      }
      break;
      
  }

  return TotalPrice;
  
};

function orderSummary(order) {
  
    order.type.val(),
    order.size.val(),
    order.crust.val(),
    order.toppings.next("label").text(),
    order.count,
    order.orderPrice
  
}
// //User Interface
// $(document).ready(function() {
//   $("#orderForm").submit(function(event) {
//     event.preventDefault();
//   });

//Reveal order summary upon clicking make order.
// $("#pizzaCraft").submit(function() {
//   $(".orderSummary").show();
// });

$(".Delivery").click(function() {
  $(".customerContactDetails").show();
});

//Create summary
$("#list").text(" ");
$("#list")
  .append(
    "<br>" +
      "Type :   " +
      newOrder.type.val() +
      "<br>" +
      "Size :   " +
      newOrder.size.val() +
      "<br>" +
      "Crust :     " +
      newOrder.crust.val() +
      "<br>" +
      " count of pizzas :    " +
      newOrder.count +
      "<br>" +
      " Toppings :    " +
      newOrder.toppings.next("label").text() +
      "<br>" +
      "Total Price :  " +
      newOrder.orderPrice() +
      "<br><br>"
  )
  .css("font-family", "system-ui")
  .css("font-size", "24px");

//   //Write to the order
//   $(".summary").slideDown(+toppingsPrice);
//   $(".cdata-overlay").slideUp();
//   $("#list").slideDown();
//   $(".deliver").show(100 + toppingsPrice);
//   $(".delivernot").show(100 + toppingsPrice);
// });
  });
});


