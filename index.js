let arr = [];

function helo() {
    for (let i = 0; i < 6; i++) {
        arr.push([]);
        let number = 35 - i * 6; 
        for (let j = 0; j < 3; j++) {
            arr[i].push(number - j * 2);
        }
    }
}
helo();
console.log(arr)