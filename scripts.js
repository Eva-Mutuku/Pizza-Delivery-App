$(function () {
  $('.summary').hide();
  $('.cdata-overlay').hide();
  //Get inputs
  $("#checkout").click(function () {
    let TypeOfPizza = $("#Pizza-selection:selected").val();
    let size = $("#Pizza-size:selected").val();
    let crust = $("#Crust:selected").val();
    let toppings = $("#Toppings:selected").val();
    let extraToppings = $("#Extra-toppings:selected").val();
    let number = $("#quantity").val();
    console.log(size);

    //Function order
    function order(TypeOfPizza, size, crust, PizzaQuantity, ExtraToppings, Total){
        this.TypeOfpizza = TypeOfPizza;
        this.size = size;
        this.crust = crust;
        this.ExtraToppings = ExtraToppings;
        this.PizzaQuantity = PizzaQuantity;
        this.total = total;
      };

    //check price
    let price, totalPrice;
    switch (TypeOfPizza) {
      case TypeOfPizza = ("Meat" && ("#Chicago" ||"#NYC"|| "Neapolitan" || "Pepperoni")):
        switch (size) {
          case size = "kidsize":
            price = 800;
            if (crust === "thin-crusted") {
              totalPrice = (price * number);
            } else if (crust === "thick-crusted") {
              totalPrice = (price * number) + 100;
            } else if (crust === "deep-crust") {
              totalPrice = (price * number) + 150;
            } else {
              totalPrice = (price * number) + 200;
            }
            break;
          case size = "medium":
            price = 1000;
            if (crust === "thin-crusted") {
              totalPrice = (price * number);
            } else if (crust === "thick-crusted") {
              totalPrice = (price * number) + 100;
            } else if (crust === "deep-crust") {
              totalPrice = (price * number) + 150;
            } else {
              totalPrice = (price * number) + 200;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin-crusted") {
              totalPrice = (price * number);
            } else if (crust === "thick-crusted") {
              totalPrice = (price * number) + 100;
            } else if (crust === "deep-crust") {
              totalPrice = (price * number) + 150;
            } else {
              totalPrice = (price * number) + 200;
            }
            break;
            case size = "Family-size":
              price = 1400;
              if (crust === "thin-crusted") {
                totalPrice = (price * number);
              } else if (crust === "thick-crusted") {
                totalPrice = (price * number) + 100;
              } else if (crust === "deep-crust") {
                totalPrice = (price * number) + 150;
              } else {
                totalPrice = (price * number) + 200;
              }
              break; 
        }
        break;
        case TypeOfPizza = ("Veggie" && ("#Hawaiian" ||"#Greek-Mama"|| "Mediterranean" || "Tasty-tomato")):
          switch (size) {
            case size = "kidsize":
              price = 500;
              if (crust === "thin-crusted") {
                totalPrice = (price * number);
              } else if (crust === "thick-crusted") {
                totalPrice = (price * number) + 100;
              } else if (crust === "deep-crust") {
                totalPrice = (price * number) + 150;
              } else {
                totalPrice = (price * number) + 200;
              }
              break;
            case size = "medium":
              price = 700;
              if (crust === "thin-crusted") {
                totalPrice = (price * number);
              } else if (crust === "thick-crusted") {
                totalPrice = (price * number) + 100;
              } else if (crust === "deep-crust") {
                totalPrice = (price * number) + 150;
              } else {
                totalPrice = (price * number) + 200;
              }
              break;
            case size = "large":
              price = 900;
              if (crust === "thin-crusted") {
                totalPrice = (price * number);
              } else if (crust === "thick-crusted") {
                totalPrice = (price * number) + 100;
              } else if (crust === "deep-crust") {
                totalPrice = (price * number) + 150;
              } else {
                totalPrice = (price * number) + 200;
              }
              break;
              case size = "Family-size":
                price = 1100;
                if (crust === "thin-crusted") {
                  totalPrice = (price * number);
                } else if (crust === "thick-crusted") {
                  totalPrice = (price * number) + 100;
                } else if (crust === "deep-crust") {
                  totalPrice = (price * number) + 150;
                } else {
                  totalPrice = (price * number) + 200;
                }
                break; 
          } break;
          //calculate total prize for toppings under custom order.
          var toppings = $(".Toppings input:checked");
          var Toppingprizes = toppings.map(topping => parseInt(topping.val()));
          var ToppingsTotalPrize = ToppingsPrizes.reduce(acc, cur => acc+cur);

          //calculate total prize for custom order
          case TypeOfPizza = "Custom":
            switch (size) {
              case size = "kidsize":
                price = 800;
                if (crust === "thin-crusted") {
                  totalPrice = (price * number)+ToppingsTotalPrize;
                } else if (crust === "thick-crusted") {
                  totalPrice = (price * number) + 100 + ToppingsTotalPrize;
                } else if (crust === "deep-crust") {
                  totalPrice = (price * number) + 150 + ToppingsTotalPrize;
                } else {
                  totalPrice = (price * number) + 200 + ToppingsTotalPrize;
                }
                break;
              case size = "medium":
                price = 1000;
                if (crust === "thin-crusted") {
                  totalPrice = (price * number) + ToppingsTotalPrize;
                } else if (crust === "thick-crusted") {
                  totalPrice = (price * number) + 100 + ToppingsTotalPrize;
                } else if (crust === "deep-crust") {
                  totalPrice = (price * number) + 150 + ToppingsTotalPrize;
                } else {
                  totalPrice = (price * number) + 200 + ToppingsTotalPrize;
                }
                break;
              case size = "large":
                price = 1200;
                if (crust === "thin-crusted") {
                  totalPrice = (price * number) + ToppingsTotalPrize;
                } else if (crust === "thick-crusted") {
                  totalPrice = (price * number) + 100 + ToppingsTotalPrize;
                } else if (crust === "deep-crust") {
                  totalPrice = (price * number) + 150 + ToppingsTotalPrize;
                } else {
                  totalPrice = (price * number) + 200 + ToppingsTotalPrize;
                }
                break;
                case size = "Family-size":
                  price = 1400;
                  if (crust === "thin-crusted") {
                    totalPrice = (price * number) + ToppingsTotalPrize;
                  } else if (crust === "thick-crusted") {
                    totalPrice = (price * number) + 100 + ToppingsTotalPrize;
                  } else if (crust === "deep-crust") {
                    totalPrice = (price * number) + 150 + ToppingsTotalPrize;
                  } else {
                    totalPrice = (price * number) + 200 + ToppingsTotalPrize;
                  }
                  break; 
            }
            break;
    switch (Extra-toppings) {
      case topping = "Cheese":
        totalPrice = totalPrice + 100;
        break;
      case topping = "Tomatoes":
        totalPrice = totalPrice + 50;
        break;
      case topping = "Olives":
        totalPrice = totalPrice + 200;
        break;
      case topping = "Basil":
        totalPrice = totalPrice + 100;
        break;
      case topping = "Onions":
        totalPrice = totalPrice + 50;
        break;
      case topping = "Pepper":
        totalPrice = totalPrice + 50;
        break;
      case topping = "Pineapple":
        totalPrice = totalPrice + 50;
        break;
      case topping = "bacon":
        totalPrice = totalPrice + 100;
        break;
    }


//User Interface
//Select pizza, size and toppings options
 $("select").click(function(event) {
   e.preventDefault();
   var option = $(":selected").val();
   if(option === "Meat") {
     $(".meat-options").show();
     $(".veggie-options").hide();
     $(".custom-option").hide();
   }else if(option === "Veggie") {
     $(".meat-options").hide();
     $(".veggie-options").show();
     $(".custom-option").hide();
   }else {
     $(".meat-options").hide();
     $(".veggie-options").hide();
     $(".custom-option").show();
   }
 });
 $(".pizza-order").submit(function(event) {
  // a constructor to define data needed in ordering pizzas
  function PizzaOrder(size, crust, toppings, quantity) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
  }
});

});