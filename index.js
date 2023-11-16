function helo(val) {
    let x = "";

    switch (val) {
        case "a" :
            x = "One";
        break;
        case "b" :
            x = "Two";
        break;
        case "c" :
            x = "Three";
        break;
        case "d" :
            x = "Four";
        break;
    }

    return x;
}
console.log(helo("a")); // Output : "One"
