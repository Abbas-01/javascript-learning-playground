const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
/*
function titlesForGolfPlayer (par, strokes) {
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= 3) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else if (strokes > par + 3) {
        return names[6];
    } 
}
*/
titlesForGolfPlayer(5, 3);

function titlesForGolfPlayer(par, strokes) {
    switch (strokes) {
        case 1 : 
            console.log(names[0]);
        break;
        case 2 :
        case 3 :
            console.log(names[1]);
        break;
        case par - 1 :
            console.log(names[2]);
        break;
        case par :
            console.log(names[3]);
        break;
        case par + 1 :
            console.log(names[4]);
        break;
        case par + 2 :
            console.log(names[5]);
        break;
        default :
        if (strokes >= par + 3) {
            console.log(names[6]);
        }
        break;
    }
}
titlesForGolfPlayer(5, 10);
