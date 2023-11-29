const concatArrays = (arrOne, arrTwo) => {
    let a = [...arrOne, ...arrTwo];
    return a; 
};

let x = ["Abbas", "Ali", "Farzain", "Ghazanfer"];
let y = ["Asad", "Axlan"];
let a = concatArrays(x, y);

console.log(a);

