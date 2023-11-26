const arrAnalysis = (arr) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let totalNum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalNum += arr[i];
    }
    let average = totalNum / arr.length;
    return {max, min, average};
};

console.log(arrAnalysis([1, 2, 5, 6]));
console.log(arrAnalysis([10, 2, 5, 6]));


