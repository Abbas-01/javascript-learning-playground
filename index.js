let names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Boogey", "Double-Boogey", "Go Home"];
let par = 8;

function helo(stroke) {
    if (stroke === 1) {
        return names[0];
    } else if (stroke <= 4) {
        return names[1];
    } else if (stroke <= 7) {
        return names[2];
    } else if (stroke === par) {
        return names[3];
    } else if (stroke  <= par + 2 ) {
        return names[4];
    } else if (stroke <= par + 4) {
        return names[5];
    }  else if (stroke > par + 4) {
        return names[6];
    } else if (typeof stroke !== "number") {
        return "Only Numbers are Valid characters."
    }
}
console.log(helo("string"))