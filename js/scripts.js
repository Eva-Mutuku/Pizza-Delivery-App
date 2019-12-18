// Capture form data
<script type="text/javascript">
    $(document).ready(function () {
        $("#pizzaCraft").submit(function (event) {
            event.preventDefault();
            $(".orderSummary").show();
            // Added variable count for the pizzaCount
            var pizzaType, pizzaCrust, pizzaToppings, pizzaCount;
            pizzaType = $(".pizzaType").val();
            pizzaToppings = $(".form-check-input").val();
            pizzaCrust = $("#pizzaCrust :selected").val();
            // Can't find an instance where I'll be needing to reuse the count object so I just called .val() on it
            pizzaCount = parseInt($("#pizzaCount input").val());
            
            // Create Pizza Constructor
            // Actually it's a pizza
            function PizzaOrder(type, crust, toppings, count) {
                this.type = type;
                this.crust = crust;
                this.toppings = toppings;
                this.count = count;
            }
            // new pizza order
            var newOrder = new PizzaOrder(
                pizzaType,
                pizzaCrust,
                pizzaToppings,
                pizzaCount
            );
            console.log(newOrder);
            // orderSummary(newOrder);
     
            //     // var largeSelected, mediumSelected, kidsizeSelected, xlargeSelected;
            //     var pizzaTypeSelected = $("#pizzaType :selected").attr('class');
            //     pizzaCrust = $("#pizzaCrust :selected").val();
            //     let crustprice, TotalPrice;
            //     if(pizzaCrust === "thin"){
            //         crustprice = pizzaType(":selected").val();
            //         console.log(crustprice)
            //     }
            //     else if (pizzaCrust === "thick"){
            //         crustprice = pizzaType(":selected").val() + 100;
            //         console.log(crustprice)
            //     }
            //     else if (pizzaCrust === "deep"){
            //         crustprice = pizzaType(":selected").val() + 150;
            //         console.log(crustprice)
            //     }
            //     else{
            //         crustprice = pizzaType(":selected").val() + 200;
            //         console.log(crustprice)
            //     }

            //     console.log(pizzaToppings)
            //     console.log(pizzaCount)

            //     orderPrice = (crustprice + pizzaToppings) * pizzaCount;

            //     console.log(orderPrice);
            // function orderSummary(order) {
            //         order.crust.val(),
            //         order.toppings.next("label").text(),
            //         order.count,
            //         order.orderPrice

            // }
            // //User Interface
            // $(document).ready(function() {
            //   $("#orderForm").submit(function(event) {
            //     event.preventDefault();
            //   });
            //Reveal order summary upon clicking make order.
            $("#pizzaCraft").submit(function() {
              $(".orderSummary").show();
            });
            $(".Delivery").click(function () {
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

</script>