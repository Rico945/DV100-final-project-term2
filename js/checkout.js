displayCheck = () => {
    
    let data = JSON.parse(localStorage.getItem("order"));
    let items = document.getElementById("checkout-order");
    let totalArea = document.getElementById("total-out");

    let checkTotal = 0;

    for(let i = 0; i < data.legth; i++){

        let name = data[i].subName;
        let base = data[i].subBase;
        let toppings = data[i].subToppings;
        let sauce = data[i].subSauce;
        let price = data[i].pizzaPrice;

        checkTotal += price;

        items.innerHTML += `
            <div class="orderLine">
                <p><strong>Name: </strong>${name}</p>
                <p><strong>Base: </strong>${base}</p>
                <p><strong>Toppings: </strong>${toppings.join(", ")}</p>
                <p><strong>Sauce: </strong>${sauce.join(", ")}</p>
                <p><strong>Price: </strong>${price}</p>
            </div>`

            totalArea.innerHTML = "R" + checkTotal + ".00";
    }

}