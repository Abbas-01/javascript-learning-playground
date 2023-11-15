function hello(par) {
    let x = par;
    switch (x) {
        case 1 :
            console.log("Alpha");
        break;
        case 2 :
            console.log("Beta");
        break;
        case 3 :
            console.log("Gamma");
        break;
        case 4 :
            console.log("Delta");
        break;
        default :
        console.log("Only initial four numbers are valid");
        break;
    }
}
hello(3);


