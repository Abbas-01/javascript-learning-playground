const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const images = document.querySelectorAll(".sliderImg");

function slidingImages (value) {
    images.forEach(img => {
        img.style.right = value || `${parseInt(img.style.right) - 100}%`;
    })
}

leftBtn.addEventListener("click", () => {
    if (images[0].style.right === "0%" || images[0].style.right === "") {
        slidingImages("300%");  
    } else {
        slidingImages();
    }
});
rightBtn.addEventListener("click", () => {
    if (images[0].style.right < "300%") {
        slidingImages(`${100 + (parseInt(images[0].style.right) || 0)}%`);
    } else {
        slidingImages("0%")
    }
}); 