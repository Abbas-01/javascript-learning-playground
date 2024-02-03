const addToCartBtn = document.querySelectorAll(".addToCartBtn");
const noOfItemsEle = document.querySelector(".numberOfItems");
const pdctImgsWrappers = document.querySelectorAll(".imagesWrapper");

function slidingImgs(images, val) {
    images.forEach(pdctImg => {
        pdctImg.style.right = val;    
    })
}
function dotsfunction (pdctImgsWrapper) {
    const dotsEle =  Array.from(pdctImgsWrapper.nextElementSibling.children);
    const images = pdctImgsWrapper.children;
    if (images[0].style.right === "200%") {
        dotsEle[1].style.backgroundColor = "transparent"
        dotsEle[2].style.backgroundColor = "#d4d4d4"
    } else if (images[0].style.right === "100%") {
        dotsEle[0].style.backgroundColor = "transparent"
        dotsEle[1].style.backgroundColor = "#d4d4d4"
    } else if (images[0].style.right === "" || "0%") {
        dotsEle[2].style.backgroundColor = "transparent"
        dotsEle[0].style.backgroundColor = "#d4d4d4"
    }
}
function handlingPdctImgsWrapperClick (pdctImgsWrapper) {
    const images = Array.from(pdctImgsWrapper.children);
    if (images[0].style.right === "200%") {
        slidingImgs(images, `${0}%`)
        dotsfunction(pdctImgsWrapper)
        return;
    }
    slidingImgs(images, `${100 + (parseInt(images[0].style.right) || 0)}%`)
    dotsfunction(pdctImgsWrapper)
}
pdctImgsWrappers.forEach(pdctImgsWrapper => {
    pdctImgsWrapper.addEventListener("click", () => {
        handlingPdctImgsWrapperClick(pdctImgsWrapper)
    })
    dotsfunction(pdctImgsWrapper);
})
function updatingItems() {    
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const productsEle = Array.from(document.querySelectorAll(".card"));
    noOfItemsEle.innerHTML = `${(products.length !== 0) ? products.length : 0}`;  
    productsEle.forEach(ele => {
        let productObj = products.find((product) => product.id === ele.id);
        if (productObj) {
            const btn = document.getElementById(productObj.id).lastElementChild;
            btn.textContent = `Added to the Cart`
            btn.setAttribute("data-clicked", "true");
        } else {
            const btn = document.getElementById(ele.id).lastElementChild;
            btn.textContent = `Add to Cart +`
            btn.setAttribute("data-clicked", "false");
        }
    })
    noOfItemsEle.style.display = `${products.length !== 0 ? "block" : "none"}` ;
}
function storingProductInLS(card) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({
        id: `${card.id}`,
        imageURL: `${card.querySelector(".productImg").src}`,
        productName: `${card.children[1].textContent}`,
        productPrice: `${card.children[2].firstElementChild.textContent}`,
        noOfProduct: 1
    });
    localStorage.setItem("products", JSON.stringify(products))
}
addToCartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.getAttribute("data-clicked") === "false") {
            storingProductInLS(btn.closest(".card"));
            updatingItems();
        }
    })
});

updatingItems();

window.addEventListener("storage", updatingItems)