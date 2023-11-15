function hello(pra) {
    let x;
    switch (pra) {
        case 1 :
        case 2 :
        case 3 :
           x = "Low";
        break;
        case 4 :
        case 5 :
        case 6 :
           x = "Medium";
        break;
        case 7 :
        case 8 :
        case 9 :
           x = "High";
        break;
        default :
           x = "Out of the Limit";
        break;
    }
    return x;
    }
    console.log(hello(2)); // Output "Low" 