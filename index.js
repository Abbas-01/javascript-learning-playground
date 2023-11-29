const findIndex = (arr, element) => {
    let index;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === element) {
            index = i;   
        }
    }
    if (typeof index === "undefined") {
        index = -1;
    }
    
    return index
};

let x = ["Abbas", "Ali", "Farzain", "Ghazanfer"];

let a = findIndex(x, "Farzain");
console.log(a);

