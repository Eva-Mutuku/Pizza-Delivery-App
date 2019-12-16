// Capture form data
$(document).ready(function () {
  $("#pizzaCraft").submit(function(event){
    // Added variable count for the pizzaCount
    var pizzaType, crust, toppings, count;
    pizzaType = $("#pizzaType :selected")
    pizzaSize = $("#pizzaSize :selected")
    crust = $("#pizzaCrust :selected")
    pizzaToppings = $("#pizzaToppings :checked")

    // Can't find an instance where I'll be needing to reuse the count object so I just called .val() on it
    count = $("#pizzaCount input").val()

    // new pizza order
    var newOrder = PizzaOrder(pizzaType, pizzaSize, crust, toppings, count)


    event.preventDefault()
  })
})

// Create Pizza Constructor
// Actually it's a pizza
function PizzaOrder(type,size, crust, toppings, count){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.count = count;
}

// Add object method using prototype
PizzaOrder.prototype.orderPrice = function() {
  var typePrice, sizePrice,crustPrice, toppingsPrice;
  typePrice = this.type.val();
  sizePrice = this.size.val();
  crustPrice = this.crust.val();

  toppingsPrice = this.toppings.map(function(topping){return topping.val()});
  toppingsPrice = toppingsPrice.reduce(function(acc, cur){return acc + cur});
//Hey, we cannot be too far...right?
  
  var orderPrice = (typePrice + sizePrice + crustPrice + toppingsPrice) * this.count;

  return orderPrice;
};

//By the way, please let me know if you need a nap. Saa nane ishafika -:)
function orderSummary(order){


  alert([order.type, order.size, order.crust, order.toppings, order.count])
}

//User Interface
$(document).ready(function(){
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    // var testInput1 = $()
  })
  //Showing section to choose preferred toppings under custom order
//   var TypeOfPizza = $(":selected").val();
//   if(option === "thin-crusted" || "thick-crusted" || "deep-crust" || "stuffed-crust") {
//     $(".Custom-PreferredToppings").show();
//     TypeOfPizza = option + $(":checked").val();
//  }else {
//   TypeOfPizza = $(":selected").val();
//  }

 //Reveal order summary upon clicking make order.
 $(".pizza-order").Click(function () {
  $('.orderSummary').show();
 })

 $(".Delivery").Click(function () {
  $('.customerContactDetails').show();
 })
  
  //Get inputs
  // $("#checkout").click(function () {
  //   let TypeOfPizza = $("#Pizza-selection:selected").val();
  //   let size = $("#Pizza-size:selected").val();
  //   let crust = $("#Crust:selected").val();
  //   let toppings = $("#Toppings:selected").val();
  //   let extraToppings = $("#Extra-toppings:selected").val();
  //   let count = $("#quantity").val();
  //   console.log(size);

 //Create summary 
 $('#list').text(" ");
 $("#list").append("<br>" + "TypeOfPizza :   " + newOrder.TypeOfPizza + 
 "<br>" + "Size :   " + newOrder.size + "<br>" + 
 "Crust :     " + newOrder.crust + "<br>" + 
 " count of pizzas :    " + newOrder.count + "<br>" + 
 " Extra Toppings :    " + newOrder.ExtraToppings + "<br>" + 
 "Total Price :  " + newOrder.TotalPrice + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');

//Write to the order
 $('.summary').slideDown( + toppingsPrice0);
 $('.cdata-overlay').slideUp();
 $('#list').slideDown();
 $('.deliver').show(100 + toppingsPrice0);
 $('.delivernot').show(100 + toppingsPrice0);
}) 

//Business Logic
//Function order
    function pizzaOrder(TypeOfPizza, size, crust, count, ExtraToppings, TotalPrice){
      this.TypeOfpizza = TypeOfPizza;
      this.size = size;
      this.crust = crust;
      this.ExtraToppings = ExtraToppings;
      this.count = count;
      this.TotalPrice = TotalPrice;
    };

    //Execute order function
    let newOrder = pizzaOrder(TypeOfPizza, size, crust, count, ExtraToppings, TotalPrice);
    console.log(newOrder); 

                  //calculate total prize for toppings under custom order.
                  var extraToppings = $(".ExtraToppings input:checked");
                  var extraToppingPrizes = extraToppings.map(extraTopping => parseInt(extraTopping.val()));
                  var toppingsPrice = extraToppingPrizes.reduce(acc, cur => acc+cur);

        //check price of items
        //Should I still put the prices in the values in html?
      // Nuh, I've actually understood your logic here, it'll work
      //Nice
        //You can actually use this instead
      //But we loop it instead to make the code shorter
        let price, TotalPrice;
        switch (TypeOfPizza) {
          case TypeOfPizza = ("#Chicago" ||"#NYC"|| "#Neapolitan" || "#Pepperoni"):
            switch (size) {
              case size = "kidSize":
                price = 800;
                if (crust === "thin-crusted") {
                  TotalPrice = (price * count) + toppingsPrice;
                } else if (crust === "thick-crusted") {
                  TotalPrice = (price * count) + 100 + toppingsPrice;
                } else if (crust === "deep-crust") {
                  TotalPrice = (price * count) + 150 + toppingsPrice;
                } else {
                  TotalPrice = (price * count) + 200 + toppingsPrice;
                }
                break;
              case size = "medium":
                price = 100 + toppingsPrice0;
                if (crust === "thin-crusted") {
                  TotalPrice = (price * count) + toppingsPrice;
                } else if (crust === "thick-crusted") {
                  TotalPrice = (price * count) + 100 + toppingsPrice;
                } else if (crust === "deep-crust") {
                  TotalPrice = (price * count) + 150 + toppingsPrice;
                } else {
                  TotalPrice = (price * count) + 200 + toppingsPrice;
                }
                break;
              case size = "large":
                price = 1 + toppingsPrice;
                if (crust === "thin-crusted") {
                  TotalPrice = (price * count) + toppingsPrice;
                } else if (crust === "thick-crusted") {
                  TotalPrice = (price * count) + 100 + toppingsPrice;
                } else if (crust === "deep-crust") {
                  TotalPrice = (price * count) + 150 + toppingsPrice;
                } else {
                  TotalPrice = (price * count) + 200 + toppingsPrice;
                }
                break;
                case size = "familySize":
                  price = 1400;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * count) + toppingsPrice;
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * count) + 100 + toppingsPrice;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * count) + 150 + toppingsPrice;
                  } else {
                    TotalPrice = (price * count) + 200 + toppingsPrice;
                  }
                  break; 
            }
            break;
            case TypeOfPizza = ("#Hawaiian" ||"#Greek-Mama" || "Mediterranean" || "Tasty-tomato"):
              switch (size) {
                case size = "kidSize":
                  price = 500;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * count);
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * count) + 100 + toppingsPrice;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * count) + 150 + toppingsPrice;
                  } else {
                    TotalPrice = (price * count) + 200 + toppingsPrice;
                  }
                  break;
                case size = "medium":
                  price = 700;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * count) + toppingsPrice;
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * count) + 100 + toppingsPrice;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * count) + 150 + toppingsPrice;
                  } else {
                    TotalPrice = (price * count) + 200 + toppingsPrice;
                  }
                  break;
                case size = "large":
                  price = 900;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * count) + toppingsPrice;
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * count) + 100 + toppingsPrice;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * count) + 150 + toppingsPrice;
                  } else {
                    TotalPrice = (price * count) + 200 + toppingsPrice;
                  }
                  break;
                  case size = "familySize":
                    price = 1100 + toppingsPrice;
                    if (crust === "thin-crusted") {
                      TotalPrice = (price * count) + toppingsPrice;
                    } else if (crust === "thick-crusted") {
                      TotalPrice = (price * count) + 100 + toppingsPrice;
                    } else if (crust === "deep-crust") {
                      TotalPrice = (price * count) + 150 + toppingsPrice;
                    } else {
                      TotalPrice = (price * count) + 200 + toppingsPrice;
                    }
                    break; 
              } break;
             

