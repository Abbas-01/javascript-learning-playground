const lengthOfArr = (arr) => {
    let lengthArray = arr.map(a => {
        return a.length;
    });
    return lengthArray;
};

const x = ["Abbas", "Tanveer", "Ali", "Asad", "Farzain"];
console.log(lengthOfArr(x));

