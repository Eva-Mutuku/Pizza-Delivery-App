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
      case TypeOfPizza = ("Meat" && "#Chicago"):
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
        }
        break;
      case flavour = "chickentikka":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
      case flavour = "periperi":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
      case flavour = "Steak":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
      case flavour = "boerewors":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
      case flavour = "hawaiian":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
      case flavour = "mushroom":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
      case flavour = "regina":
        switch (size) {
          case size = "regular":
            price = 300;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "medium":
            price = 600;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
          case size = "large":
            price = 1200;
            if (crust === "thin") {
              totalPrice = (price * number) + 100;
            } else if (crust === "thick") {
              totalPrice = (price * number) + 150;
            } else if (crust === "flatbread") {
              totalPrice = (price * number) + 180;
            } else {
              totalPrice = (price * number) + 280;
            }
            break;
        }
        break;
    }
    switch (topping) {
      case topping = "tomato":
        totalPrice = totalPrice + 80;
        break;
      case topping = "onions":
        totalPrice = totalPrice + 80;
        break;
      case topping = "mushroom":
        totalPrice = totalPrice + 80;
        break;
      case topping = "greenpepper":
        totalPrice = totalPrice + 80;
        break;
      case topping = "olives":
        totalPrice = totalPrice + 120;
        break;
      case topping = "pineapple":
        totalPrice = totalPrice + 120;
        break;
      case topping = "sweetcorn":
        totalPrice = totalPrice + 120;
        break;
      case topping = "macon":
        totalPrice = totalPrice + 120;
        break;
      case topping = "mince":
        totalPrice = totalPrice + 120;
        break;
      case topping = "beef":
        totalPrice = totalPrice + 170;
        break;
      case topping = "chicken":
        totalPrice = totalPrice + 170;
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
