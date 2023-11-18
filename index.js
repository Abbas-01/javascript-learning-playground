let myArr = [[1, 5], [2,6], [3, 7], [4, 8]];
function productArr() {
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    myArr[i][j] = myArr[i][j] + 2;
  }
}
return myArr;
}

console.log(productArr())