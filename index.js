const averageOfElements = (arr) => {
    let sumOfEle =  arr.reduce((acc, currVal) => acc+currVal);
    return sumOfEle / arr.length;
}

console.log(averageOfElements([20, 40, 60, 80, 100]));