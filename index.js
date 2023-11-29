const isPalindromeArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
    if (arr[left] === arr[right]) {
        left++;
        right--;
    } else {
        return false;
    } 
}

return true;

};

let x = [1, 2, 3, 2, 1];
let y = [1, 2, 3, 4, 5];

let a = isPalindromeArray(x);
console.log(a);

let b = isPalindromeArray(y);
console.log(b);


