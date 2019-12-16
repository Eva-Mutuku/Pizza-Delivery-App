//Array for different items in each selection
var pizzaSize = ["kidSize", "medium", "large", "familySize"];
var pizzaSizePrices = ["500", "700", "1000", "1200"];

pizzaSizes.forEach(function(PizzaSize) {
  return pizzaSize;
});

alert(pizzaSize);

})["500", "700", "1000", "1200"];
var crustType = ["thin-crusted", "thick-crusted", "deep-crust", "stuffed crust"];
var meatToppings = ["bacon", "beef", "sausage", "ham", "pepperoni", "chicken"];
var seafoodToppings = ["shrimp", "anchovies", "oysters", "sardines", "tuna"];
var veggieToppings = ["mushrooms", "tomatoes", "olives", "basil", "egg-plant", "green-pepper"];
var extraToppings = ["cheese", "olives", "basil", "onions", "pepper"];
var pizzaTypes = {
  meat: ["Chicago", "Neopolitan", "NYC", "Pepperoni"],
  veggie: ["Hawaiian", "Greek-Mama-Pizza", "Mediterranean", "Tasty-Tomato"]
}

var pizzaSize = {
  name:("kidsize"), price="500",
  name:"medium", price="700",
  name:"large", price="1000",
  name:"familySize", price="1200",
}
var pizzaSize = {
  name:"kidsize", price="500",
  name:"medium", price="700",
  name:"large", price="1000",
  name:"familySize", price="1200",
}

var pizzaCrustPrices = pizzaSizePrices.map(function(pizzaSizePrice) {
  return pizzaSizePrice + 200;
});

function customPizzaOrder(crustType, pizzaSize, toppings, quantity) {
    this.crustType = crustType;
    this.pizzaSize = pizzaSize;
    this.toppings = toppings;
    this.quantity = quantity;
 }
 customPizzaOrder.prototype.price = function () {
   var option = $(":selected").val();
  if(option === "Meat" || option === "Veggie") {
    cost = this.pizzaSizePricing() 
  }
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
