let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("sub").value;

    let baseOption = document.getElementsByName("baseRadio");
    let baseValue;
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value;
            subTotal += +baseOption[i].dataset.cost;
        }
    }

    let toppings = document.getElementsByName("toppings");
    let toppingsArray = [];
    for(let i = 0; i < toppings.length; i++){
        if(toppings[i].checked){
            toppingsArray.push(toppings[i].value);
            subTotal += +toppings[i].dataset.cost;
        }
    }

    let sauce = document.getElementsByName("sauce");
    let sauceArray = [];
    for(let i = 0; i < sauce.length; i++){
        if(sauce[i].checked){
            sauceArray.push(sauce[i].value);
            subTotal += +sauce[i].dataset.cost;
        }
    }

    subOrder.push({
        subName: subName,
        subBase: baseValue,
        subToppings: toppingsArray,
        subSauce: sauceArray,
        subPrice: subTotal
    });

}

displayOrder = () => {

    let area = document.getElementById("order");

    area.innerHTML = "";

    let overallTotal = 0; 

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subName;
        let base = subOrder[i].subBase;
        let toppings = subOrder[i].subToppings;
        let sauce = subOrder[i].subSauce
        let price = subOrder[i].subPrice;

        overallTotal += price;

        area.innerHTML += `
            <div class="col-6">
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p>Base: ${base}</p>
                        <p>Toppings: ${toppings.join(", ")}</p>
                        <p>Sauce: ${sauce.join(", ")}</p>
                        <p>Total Cost: R${price}.00</p>
                    </div>
                </div>
            </div>`
    }
}

checkout = () => {
    let data = JSON.stringify(subOrder);
    localStorage.setItem("order", data);
    window.location.href = "checkout.html";
}