var i=0;
$(document).ready(function(){
    $("#add-item-btn").click(function(){
        var item_name = $("#item-name").val();
        var category = $("#category").val();
        var unit_price = $("#unit-price").val();
        var quntity = $("#quntity").val();

        // var args = `${item_name}, ${category}, ${unit_price}, ${quntity};
        var table = `<tr align='center'> <td id="item_name${i}">${item_name}</td> <td id="category${i}">${category}</td> <td id="unit_price${i}">${unit_price}</td> <td id="quntity${i}">${quntity}</td> <td><button class="btn" style="background-color:  rgb(79, 190, 172)" onclick="count(${i})">Sale Item</button></td></tr>`;
        i++;
        console.log(table);
        $(".data-available-item").append(table);    
    });

    $(document).on('click', 'button.btn', function(){
        $(this).closest('tr').remove();
        return false;
    });

    $(".add-to-bill").click(function(){
        
        var item_name_sales = $("#item-name-sales").val();
        var category_sales = $("#category-sales").val();
        var unit_price_sales = $("#unit-price-sales").val();
        var quntity_sales = $("#quantity-sales").val();
        var discount_sales = $("#discount-sales").val();

        //console.log(main_sales_product);
        var amount_sales = (unit_price_sales * quntity_sales) - (unit_price_sales * quntity_sales) / (discount_sales);
 
        console.log(amount_sales);
        var table = `<tr align='center'> <td id="item_name_sales${i}">${item_name_sales}</td> <td id="category_sales${i}">${category_sales}</td> <td id="unit_price_sales${i}">${unit_price_sales}</td> <td id="quntity_sales${i}">${quntity_sales}</td> <td id="discount_sales${i}">${discount_sales}</td> <td id="amount_sales${i}">${amount_sales}</td> <td><button class="btn" style="background-color: rgb(79, 190, 172); width: 100%;" onclick="delete(${i})">Delete</button></td> </tr>`;
        i++;
        $(".selector-item").append(table);


        var amount = $(`#amount_sales${i}`).text();
        console.log(amount);
        // for(i=1; i<= amount; i++) {
        //     var $amount_addition = amount;
        // }
    });

    $(document).on('click', 'Delete.btn', function(){
        $(this).closest('tr').delete();
        return false;
    });

})  

function count(args) {

    var item_sales = $(`#item_name${args}`).text();
    var category_sales = $(`#category${args}`).text();
    var unit_price_sales = $(`#unit_price${args}`).text();
    var quntity_sales = $(`#quntity${args}`).text();

    document.getElementById("item-name-sales").value = item_sales;
    document.getElementById("category-sales").value = category_sales;
    document.getElementById("unit-price-sales").value = unit_price_sales;
    document.getElementById("quantity-sales").value = quntity_sales;
}
