function creatingProduct (products) {
    return products.map((product) => {
        let {id, imageURL, productName, productPrice, noOfProduct} = product;
        return `<tr id="${id}">
        <td class="productImage">
        <img src=${imageURL}>
        </td>
        <td class="productName">${productName}</td>
        <td class="qunatity">
        <span id="increaseBtn" class="incDecBtns">+</span>
        <span id="productQunatity">${noOfProduct}</span>
        <span id="decreaseBtn" class="incDecBtns">-</span>
        </td>
        <td class="productPrice">${(productPrice*noOfProduct).toFixed(2)}$</td>
        <td onclick="removeProduct(${id})" class="productRemoveBtn"><i class="fa-solid fa-xmark"></i></td>
        </tr>`
    }).join("");
}
function displayingTotalAmnt(products) {
    return products.reduce((acc, product) => {
        return acc +  parseFloat(product.productPrice * product.noOfProduct)
    }, 0)
}
function removeProduct (selectedProduct) {
    let products = JSON.parse(localStorage.getItem("products"));
    products = products.filter(product => {
        return product.id !== selectedProduct.id; 
    })
    localStorage.setItem("products", JSON.stringify(products))
    displayingProducts()
}
function handlingPrdctIncrement (selectedProduct, products) {
    products =  products.map(product => {
        if (product.id === selectedProduct.id) {
            product.noOfProduct++
        }
        return product;
    });
}
function handlingPrdctDecrement(selectedProduct, products) {
    products =  products.map(product => {
        if (product.id === selectedProduct.id) {
            product.noOfProduct--;
        }
        return product;
    });
}
function increasingAndDecreasingQuantatityOfProduct (e) {
    const selectedProductEle = e.target.closest("tr");
    if (e.target.classList.contains("incDecBtns")) {
        const productPriceEle =  selectedProductEle.querySelector(".productPrice");
        const productQunatityEle = selectedProductEle.querySelector("#productQunatity");
        let products = JSON.parse(localStorage.getItem("products"));
        const selectedProduct = products.find((product) => product.id === selectedProductEle.id)
        if (e.target.id === "increaseBtn") {
            if (selectedProduct.noOfProduct === 10) {
                alert("Maximum ten products you can purchase")
                return;
            }
            handlingPrdctIncrement(selectedProduct, products);
        } else if (e.target.id === "decreaseBtn") {
            if (selectedProduct.noOfProduct === 1) {
                removeProduct(selectedProductEle);
                return;
            }
            handlingPrdctDecrement(selectedProduct, products)
        }
        productQunatityEle.textContent = `${selectedProduct.noOfProduct}`;
        productPriceEle.textContent = `${(selectedProduct.productPrice*selectedProduct.noOfProduct).toFixed(2)}$`;
        document.querySelector("#totalAmount").textContent = `${displayingTotalAmnt(products).toFixed(2)} $`;
        localStorage.setItem("products", JSON.stringify(products));
    }
}
function showEmptyCartContent () {
    const emptyCartContent = document.querySelector(".emptyCart");
    const table = document.querySelector("table");
    emptyCartContent.style.display = "flex";
    table.style.display = "none"
}
function hideEmptyCartContent () {
    const emptyCartContent = document.querySelector(".emptyCart");
    const table = document.querySelector("table");
    emptyCartContent.style.display = "none";
    table.style.display = "table";
}
function displayingProducts () {
    const products = JSON.parse(localStorage.getItem("products"));
    const noOfItemsEle = document.querySelector(".numberOfItems");
    if (products !== null) {
        const productsWrapper = document.querySelector("tbody");
        document.querySelector("#totalAmount").textContent = `${displayingTotalAmnt(products).toFixed(2)} $`
        hideEmptyCartContent()
        noOfItemsEle.innerHTML = products.length; 
        productsWrapper.innerHTML = creatingProduct(products); 
        const pdtQuantitiesBtnsWrappers = document.querySelectorAll(".qunatity");
        pdtQuantitiesBtnsWrappers.forEach(btnWrapper => {
            if (btnWrapper !== null) {
                btnWrapper.addEventListener("click", increasingAndDecreasingQuantatityOfProduct)
            }
        })
    } 
    if (products === null || products.length === 0) {
        showEmptyCartContent()
    }
    noOfItemsEle.style.display = `${products.length !== 0 ? "block" : "none"}`
}; 

displayingProducts();

window.addEventListener("storage", displayingProducts);
