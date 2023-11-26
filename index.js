// const largerNumber = (numOne, numTwo) => {
//     if (numOne > numTwo) {
//         return numOne;
//     } else if (numOne < numTwo) {
//         return numTwo;
//     }
// }
// console.log(largerNumber(5, 20));

const largerNumber = (numOne, numTwo) => {
    return (numOne > numTwo) ? "numOne " + numOne : (numOne < numTwo) ? "numTwo " + numTwo : "Numbers are only valid characters" 
} 
console.log(largerNumber(1000, 10))