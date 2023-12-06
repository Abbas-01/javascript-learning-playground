const convertToUpperCase = (arr) => {
    let uppercasedArr = arr.map(a => {
        return a.toUpperCase();
    });
    return uppercasedArr;
};

const x = ["Abbas", "Ali", "Tanveer", "Asad"];
console.log(convertToUpperCase(x));

