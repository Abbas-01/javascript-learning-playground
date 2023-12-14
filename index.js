const carsPrototype = {
    model: "Ford GT",
    color: "Red",
    doors: 2,
    engine () {
        return "V6";
    },
    sound () {
        return "Vrooom!"
    }
};

const audi = Object.create(carsPrototype);
console.log(audi.sound())
