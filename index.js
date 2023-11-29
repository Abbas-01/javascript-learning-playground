const findIndex = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === element) {
            return i;   
        }
    }
    
    return -1;
};

let x = ["Abbas", "Ali", "Farzain", "Ghazanfer"];

let a = findIndex(x, "arzain");
console.log(a);

