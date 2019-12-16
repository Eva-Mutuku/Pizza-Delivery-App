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
  $("#checkout").click(function () {
    let TypeOfPizza = $("#Pizza-selection:selected").val();
    let size = $("#Pizza-size:selected").val();
    let crust = $("#Crust:selected").val();
    let toppings = $("#Toppings:selected").val();
    let extraToppings = $("#Extra-toppings:selected").val();
    let PizzaQuantity = $("#quantity").val();
    console.log(size);

 $('#list').text(" ");
 $("#list").append("<br>" + "TypeOfPizza :   " + newOrder.TypeOfPizza + 
 "<br>" + "Size :   " + newOrder.size + "<br>" + 
 "Crust :     " + newOrder.crust + "<br>" + 
 " PizzaQuantity of pizzas :    " + newOrder.PizzaQuantity + "<br>" + 
 " Extra Toppings :    " + newOrder.ExtraToppings + "<br>" + 
 "Total Price :  " + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');

        Write to the order
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
        

 


