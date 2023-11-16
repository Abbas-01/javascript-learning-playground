
function helo(val) {

    let obj = {
        "a" : "One",
        "b" : "Two",
        "c" : "Three",
        "d" : "Four"
    }

    let x = obj[val];

    return x;
}
console.log(helo("d")); // Output : "Four"
