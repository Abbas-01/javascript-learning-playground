function itemList(arr, item) {
    arr.shift();
    arr.push(item);
}

let itemsArr = ["Chips", "Coke", "Chicken", "Chocolate"];

console.log(itemsArr);

itemList(itemsArr, "Burger");

console.log(itemsArr);
