/* 
Creating a nested array of 5 child array and in each child array, we are adding three numbers and these numbers are in ascending order like first child array have first three numbers and next child array have next three.

First we created an array, then we created a loop which will run 5 times, and in each time it will create a new child array, and then we created a variable which will create the order of numbers, in this variable we have multiplied the current iterating variable with 3 and added it with 1, so with this what will happen is when the value of iterating variable is zero then it will multiply with three which will give us zero then it will be added with one the value of number variable is now one, and after that we created a child loop in which we are adding elements in the child array, so the value of number variable will be added with the child loop iterating variable's value which is zero so the value is now one which will be added in to the child array, now this child loop will be executed 3 times one time is executed now two more times will be executed, when it runs the second time then the value of number which is one will be addded with the value of iterating variable which now is one so now the number 2 will be added into the array.   
*/

let array = [];
for (let i = 0; i < 5; i++) {
    array.push([]);

    let number = 1 + i * 3;
    for (let j = 0; j < 3; j++) {
        array[i].push(number + j);
    }
}

console.log(array);


