const extractFirstCharac = (arr) => {
    return arr.map(a => {
        return a[0];
    })
};

const x = ["Abbas", "Tanveer", "Ali", "Asad", "Farzain"];
console.log(extractFirstCharac(x));


