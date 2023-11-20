function helo(number) {
    let x = number < 5 ? "Less than five" : number > 5 ? "Greater than five" : "Equal to five";
    return x;
}
console.log(helo(3));
console.log(helo(5));
console.log(helo(10));