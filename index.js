/* 
It's too a counting card but in this one you have to explicitly call the function and assign the value of your card.

What changes we have done?

In this we are not giving a parameter to the function instead we are creating a variable outside of the function, if we create this variable inside the function then we are not able to access or modify the value of the variable outside of the function because the variable will be in the block scope.
*/


let count = 0;
// let card;
function helo() {

    switch (card) {
        case 2 :
        case 3 :
        case 4 :
        case 5 :
            count++;
        break;

        case 8 :
        case 9 :
        case 10 :
        case "K" :
        case "A" :
            count--;
        break;
    }

    let betGuide;
    if (count <= 0) {
        betGuide = "Hold";
    } else {
        betGuide = "Bet";
    }

    return count + " " + betGuide;
}
let card = 5;
helo();
 card = 2;
helo();
 card = "K";
 console.log(helo());