let a = [1, 2, 5, 3, 1, 2];
const mySet = new Set(a);

mySet.forEach(x => {
    console.log("Set element " + x);
})