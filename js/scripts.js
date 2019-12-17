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

  switch (this.type) {
    case (this.type =
      "Chicago-Pizza" || "NYC-Pizza" || "Neapolitan-Pizza" || "Pepperoni-Pizza"):
      switch (this.size) {
        case (this.size = "kidSize"):
          price = 800;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
        case (this.size = "medium"):
          price = 100 + toppingsTotalPrice;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
        case (this.size = "large"):
          price = 1 + toppingsTotalPrice;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
        case (this.size = "familySize"):
          price = 1400;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
      }
      break;
    case (this.type =
      "Hawaiian-Pizza" ||
      "Greek-Pizza" ||
      "Mediterranean-Pizza" ||
      "Tasty-tomato-Pizza"):
      switch (this.size) {
        case (this.size = "kidSize"):
          price = 500;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
        case (this.size = "medium"):
          price = 700;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
        case (this.size = "large"):
          price = 900;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
        case (this.size = "familySize"):
          price = 1100 + toppingsTotalPrice;
          if (this.crust === "Thin") {
            TotalPrice = price * this.count + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Thick") {
            TotalPrice = price * this.count + 100 + toppingsTotalPrice;
            return TotalPrice;
          } else if (this.crust === "Deep") {
            TotalPrice = price * this.count + 150 + toppingsTotalPrice;
            return TotalPrice;
          } else {
            TotalPrice = price * this.count + 200 + toppingsTotalPrice;
            return TotalPrice;
          }
          break;
      }
      break;
  }
};

function orderSummary(order) {
  alert([order.type.val(), order.size.val(), order.crust.val(), order.toppings.next("label").text(), order.count]);
}

// //User Interface
// $(document).ready(function() {
//   $("#orderForm").submit(function(event) {
//     event.preventDefault();
//   });

//   //Reveal order summary upon clicking make order.
//   $(".pizza-order").Click(function() {
//     $(".orderSummary").show();
//   });

//   $(".Delivery").Click(function() {
//     $(".customerContactDetails").show();
//   });

//   //Create summary
//   $("#list").text(" ");
//   $("#list")
//     .append(
//       "<br>" +
//         "this.type :   " +
//         newOrder.this.type +
//         "<br>" +
//         "Size :   " +
//         newOrder.size +
//         "<br>" +
//         "Crust :     " +
//         newOrder.crust +
//         "<br>" +
//         " count of pizzas :    " +
//         newOrder.count +
//         "<br>" +
//         " Extra Toppings :    " +
//         newOrder.toppings +
//         "<br>" +
//         "Total Price :  " +
//         newOrder.TotalPrice +
//         return TotalPrice;
//         "<br><br>"
//     )
//     .css("font-family", "system-ui")
//     .css("font-size", "24px");

//   //Write to the order
//   $(".summary").slideDown(+toppingsPrice);
//   $(".cdata-overlay").slideUp();
//   $("#list").slideDown();
//   $(".deliver").show(100 + toppingsPrice);
//   $(".delivernot").show(100 + toppingsPrice);
// });