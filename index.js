
let count = 0;
function hello(card) {

    switch (card) {
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
             count = count + 1;
        break;
        case 8 :
        case 9 :
        case 10 :
        case "K" :
        case "A" :
           count = count - 1;
        break;
    }

    let bet = "Hold";
    if (count > 0) {
        bet = "Bet"
    }
    return count + " " + bet;
};

hello(2);
hello(1)
hello("K");
hello(3);
hello(3);
console.log(hello(1));