let count = 0;

function helo(card) {

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
 helo(2);
 helo(8);
 console.log(helo("K"));