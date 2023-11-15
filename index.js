function hello(pra) {
    let x;

    switch (pra) {
        case "bob" : 
        x = "Marley";
        break;
        case 42 :
            x = "The Answer";
        break;
        case 1 :
            x = "There is no #1";
        break;
        case 99 :
            x = "Missed me by this much!";
        break;
        case 7 :
            x = "Ate Nine";
        break;
    }
    return x;
}

console.log(hello(99));