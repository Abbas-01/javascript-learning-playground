const myObj = {
    name: "Abbas",
    age: 16,
    grade: 10,
    address: {
        country: "Pakistan",
        city: "Badin",
        village: "Matli"
    },
    getUserInto() {
        console.log(`My name is ${this.name}`);
    }

}
myObj.getUserInto();