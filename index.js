function helo(number, power) {
    let x;
    switch (power) {
        case "one":
          x = 1; 
        break;
        case "two":
            x = 2; 
          break;
        case "three":
            x = 3; 
          break;
        case "four":
            x = 4; 
          break;


    }
    let value = Math.pow(number, x);
    return value;
    
}
console.log(helo(4, "four"));
console.log(helo(2, "four"));
console.log(helo(3, "three"));
console.log(helo(1023, "four"));