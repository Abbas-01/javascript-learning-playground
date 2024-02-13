const secHand = document.querySelector(".secHand");
const minHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hourHand");

function clockMovement () {
    let now = new Date();    
    secHand.style.rotate = `${180+(6*now.getSeconds())}deg`;
    minHand.style.rotate = `${180+(6*now.getMinutes())}deg`;;
    hourHand.style.rotate = `${180+(6*5*(now.getHours()+parseFloat((now.getMinutes()/100)+0.40)))}deg`;
}

setInterval(() => {
    clockMovement()
}, 1000);   