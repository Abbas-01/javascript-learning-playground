let arr = [1, 2, 3, 4, 5];
let zero = "0";
for (i = 0; i < arr.length; i++) {
  arr[i] = zero + arr[i];
}
console.log(arr)