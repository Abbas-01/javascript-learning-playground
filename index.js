const vehilce = {
    company: "Toyota",
    doors: 4,
    drive () {
        return `You are driving a ${this.company} vehicle`
    }
}

const car = Object.create(vehilce);
car.model = "Corolla";
car.drive = function () {return `You are driving a ${this.company} ${this.model}`};

const sportCar = Object.create(car);
sportCar.model = "Supra";
sportCar.engine = "V6"
sportCar.doors = 2;

console.log(sportCar);
console.log(car);
console.log(vehilce);
