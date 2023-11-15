/* 
In this code, We are creating a counting card. So what we are doing is first we create a count variable which will increase by one when we have small cards and it will decrease by one when we have big cards. After that we have a function named "helo" and we have given it a parameter named "card" and in this function we have a switch statement in which we are checking if card is less than 6 than the count variable will increase using increment operator, if card is greater than 6 or it has a "K" or "A" card then it will decrease using decrement operator. After that we have create a variable named "betGuide" which will tell us that we have to Bet or Hold. And finally we are returning the count and betGuide variable. If we not return this then it will show undefined.

If we declare the count variable inside the function then, when we have multiple cards then we have to run the function multiple times and we have set the count to 0 so every time the function execute the value of count will be set to 0.

The increment and decrement operators assign and add or substract the value to the variable, if we don't want to use these operators then we have to assign the value to the count variable seperately like this "count = count + 1 / count = count - 1;"

*/


let count = 0;

function helo(card) {

switch (card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        count++;
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    case "K":
    case "A":
        count--;
    break;
}

let betGuide = "Bet";
if (count < 1) {
    betGuide = "Hold";
}
return `${count} ${betGuide}`;

};
helo(8);
helo(1);
helo(1);
console.log(helo(2))
