let myArr = [[1, 5], [2,6], [3, 7], [4, 8]];
function productArr() {
  let product = 1;
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    product *= myArr[i][j];
  }
}
return product;
}

console.log(productArr())