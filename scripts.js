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
    let order = (TypeOfPizza, size, crust, toppings, number,extraToppings, Total) => {
      return {
        TypeOfpizza,
        size,
        crust,
        toppings,
        number,
        extraToppings,
        total
      };
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
          case TypeOfPizza = "Custom":
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
    switch (Toppings) {
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


$(document).ready(function() {
  // This button will increment the value
  $('[data-quantity="plus"]').click(function(e){
   // Stop acting like a button
   e.preventDefault();
   // Get the field name
   fieldName = $(this).attr('data-field');
   // Get its current value
   var currentVal = parseInt($('input[name='+fieldName+']').val());
   // If is not undefined
   if (!isNaN(currentVal)) {
       // Increment
       $('input[name='+fieldName+']').val(currentVal + 1);
   } else {
       // Otherwise put a 0 there
       $('input[name='+fieldName+']').val(0);
   }
});
// This button will decrement the value till 0
$('[data-quantity="minus"]').click(function(e) {
   // Stop acting like a button
   e.preventDefault();
   // Get the field name
   fieldName = $(this).attr('data-field');
   // Get its current value
   var currentVal = parseInt($('input[name='+fieldName+']').val());
   // If it isn't undefined or its greater than 0
   if (!isNaN(currentVal) && currentVal > 0) {
       // Decrement one
       $('input[name='+fieldName+']').val(currentVal - 1);
   } else {
       // Otherwise put a 0 there
       $('input[name='+fieldName+']').val(0);
   }
});
//Select pizza, size and toppings options
 $("select").click(function() {
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
});
