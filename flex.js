// Capture form data
$(document).ready(function () {
  $("#pizzaCraft").submit(function(event){
    // Added variable count for the pizzaCount
    var pizzaType, crust, toppings, count;
    // good one...haha
    // but wait...
    pizzaType = $("#pizzaType :selected")
    crust = $("#pizzaCrust :selected")
    // ...And this
    //It was not making sense having pizzatype as pizza size. So I changed that. Next is pizza Crust. That's okay.
    //Extra toppings will be renamed to toppings then we remove it. So continue with toppings. Yes, PizzaToppings for id is correct.
    //Can we hide the fieldset, too many options. Since it's optional we can show it only when someone clicks on the form for toppings.Yes?

    // Yeah for sure, that's okay...

    // So I've removed the .val() method tomake the selections made a little more reusable
    pizzaToppings = $("#pizzaToppings :checked")

    event.preventDefault()
  })
})

// Create Pizza Constructor
// Actually it's a pizza
function PizzaOrder(type, crust, toppings, count){
  this.type = type;
  this.crust = crust;
  this.toppings = toppings;
  this.count = count;
}

// Add object method using prototype
PizzaOrder.prototype.orderPrice = function() {
  let sizePrice, crustPrice, toppingsPrice;
  sizePrice = this.size.val();
  crustPrice = this.crust.val();

  toppingsPrice = this.toppings.map(function(topping){return topping.val()});
  toppingsPrice = toppingsPrice.reduce(function(acc, cur){return acc + cur});

  let orderPrice = (sizePrice + crustPrice + toppingsPrice) * this.count;

  return orderPrice;
};





//User Interface
$(document).ready(function(){
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    // var testInput1 = $()
  })
  //Showing section to choose preferred toppings under custom order
  var TypeOfPizza = $(":selected").val();
  if(option === "thin-crusted" || "thick-crusted" || "deep-crust" || "stuffed-crust") {
    $(".Custom-PreferredToppings").show();
    TypeOfPizza = option + $(":checked").val();
 }else {
  TypeOfPizza = $(":selected").val();
 }

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
  //   let PizzaQuantity = $("#quantity").val();
  //   console.log(size);

 //Create summary 
 $('#list').text(" ");
 $("#list").append("<br>" + "TypeOfPizza :   " + newOrder.TypeOfPizza + 
 "<br>" + "Size :   " + newOrder.size + "<br>" + 
 "Crust :     " + newOrder.crust + "<br>" + 
 " PizzaQuantity of pizzas :    " + newOrder.PizzaQuantity + "<br>" + 
 " Extra Toppings :    " + newOrder.ExtraToppings + "<br>" + 
 "Total Price :  " + newOrder.TotalPrice + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');

//Write to the order
 $('.summary').slideDown( + extraToppingsTotalPrize0);
 $('.cdata-overlay').slideUp();
 $('#list').slideDown();
 $('.deliver').show(100 + extraToppingsTotalPrize0);
 $('.delivernot').show(100 + extraToppingsTotalPrize0);
}) 

//Business Logic
//Function order
    function pizzaOrder(TypeOfPizza, size, crust, PizzaQuantity, ExtraToppings, TotalPrice){
      this.TypeOfpizza = TypeOfPizza;
      this.size = size;
      this.crust = crust;
      this.ExtraToppings = ExtraToppings;
      this.PizzaQuantity = PizzaQuantity;
      this.TotalPrice = TotalPrice;
    };

    //Execute order function
    let newOrder = pizzaOrder(TypeOfPizza, size, crust, PizzaQuantity, ExtraToppings, TotalPrice);
    console.log(newOrder); 

                  //calculate total prize for toppings under custom order.
                  var extraToppings = $(".ExtraToppings input:checked");
                  var extraToppingPrizes = extraToppings.map(extraTopping => parseInt(extraTopping.val()));
                  var extraToppingsTotalPrize = extraToppingPrizes.reduce(acc, cur => acc+cur);

        //check price of items
        let price, TotalPrice;
        switch (TypeOfPizza) {
          case TypeOfPizza = ("#Chicago" ||"#NYC"|| "#Neapolitan" || "#Pepperoni"):
            switch (size) {
              case size = "kidSize":
                price = 800;
                if (crust === "thin-crusted") {
                  TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                } else if (crust === "thick-crusted") {
                  TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                } else if (crust === "deep-crust") {
                  TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                } else {
                  TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                }
                break;
              case size = "medium":
                price = 100 + extraToppingsTotalPrize0;
                if (crust === "thin-crusted") {
                  TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                } else if (crust === "thick-crusted") {
                  TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                } else if (crust === "deep-crust") {
                  TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                } else {
                  TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                }
                break;
              case size = "large":
                price = 1 + extraToppingsTotalPrize;
                if (crust === "thin-crusted") {
                  TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                } else if (crust === "thick-crusted") {
                  TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                } else if (crust === "deep-crust") {
                  TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                } else {
                  TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                }
                break;
                case size = "familySize":
                  price = 1400;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                  } else {
                    TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                  }
                  break; 
            }
            break;
            case TypeOfPizza = ("#Hawaiian" ||"#Greek-Mama" || "Mediterranean" || "Tasty-tomato"):
              switch (size) {
                case size = "kidSize":
                  price = 500;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * PizzaQuantity);
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                  } else {
                    TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                  }
                  break;
                case size = "medium":
                  price = 700;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                  } else {
                    TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                  }
                  break;
                case size = "large":
                  price = 900;
                  if (crust === "thin-crusted") {
                    TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                  } else if (crust === "thick-crusted") {
                    TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                  } else if (crust === "deep-crust") {
                    TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                  } else {
                    TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                  }
                  break;
                  case size = "familySize":
                    price = 1100 + extraToppingsTotalPrize;
                    if (crust === "thin-crusted") {
                      TotalPrice = (price * PizzaQuantity) + extraToppingsTotalPrize;
                    } else if (crust === "thick-crusted") {
                      TotalPrice = (price * PizzaQuantity) + 100 + extraToppingsTotalPrize;
                    } else if (crust === "deep-crust") {
                      TotalPrice = (price * PizzaQuantity) + 150 + extraToppingsTotalPrize;
                    } else {
                      TotalPrice = (price * PizzaQuantity) + 200 + extraToppingsTotalPrize;
                    }
                    break; 
              } break;
              //calculate total prize for toppings under custom order.
              var toppings = $(".Toppings input:checked");
              var Toppingprizes = toppings.map(topping => parseInt(topping.val()));
              var ToppingsTotalPrize = ToppingPrizes.reduce(acc, cur => acc+cur);
    
              //calculate total prize for custom order
              case TypeOfPizza = ("thin-crusted" || "thick-crusted" || "deep-crust" || "stuffed-crust"):
                switch (size) {
                  case size = "kidSize":
                    price = 800;
                    if (TypeOfPizza === "thin-crusted") {
                      TotalPrice = (price * PizzaQuantity) + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else if (crust === "thick-crusted") {
                      TotalPrice = (price * PizzaQuantity) + 100  + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else if (crust === "deep-crust") {
                      TotalPrice = (price * PizzaQuantity) + 150 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else {
                      TotalPrice = (price * PizzaQuantity) + 200 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    }
                    break;
                  case size = "medium":
                    price = 1000;
                    if (crust === "thin-crusted") {
                      TotalPrice = (price * PizzaQuantity) + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else if (crust === "thick-crusted") {
                      TotalPrice = (price * PizzaQuantity) + 100 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else if (crust === "deep-crust") {
                      TotalPrice = (price * PizzaQuantity) + 150 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else {
                      TotalPrice = (price * PizzaQuantity) + 200 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    }
                    break;
                  case size = "large":
                    price = 1200
                    if (crust === "thin-crusted") {
                      TotalPrice = (price * PizzaQuantity) + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else if (crust === "thick-crusted") {
                      TotalPrice = (price * PizzaQuantity) + 100 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else if (crust === "deep-crust") {
                      TotalPrice = (price * PizzaQuantity) + 150 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    } else {
                      TotalPrice = (price * PizzaQuantity) + 200 + ToppingsTotalPrize + extraToppingsTotalPrize;
                    }
                    break;
                    case size = "familySize":
                      price = 1400;
                      if (crust === "thin-crusted") {
                        TotalPrice = (price * PizzaQuantity) + ToppingsTotalPrize + extraToppingsTotalPrize;
                      } else if (crust === "thick-crusted") {
                        TotalPrice = (price * PizzaQuantity) + 100 + ToppingsTotalPrize + extraToppingsTotalPrize;
                      } else if (crust === "deep-crust") {
                        TotalPrice = (price * PizzaQuantity) + 150 + ToppingsTotalPrize + extraToppingsTotalPrize;
                      } else {
                        TotalPrice = (price * PizzaQuantity) + 200 + ToppingsTotalPrize + extraToppingsTotalPrize;
                      }
                      break; 
                }
                break;
        

 


