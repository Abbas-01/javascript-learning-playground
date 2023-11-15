function hello(pra) {
let x;
switch (pra) {
    case 1 :
       x = "Low";
    break;
    case 2 :
       x = "Low";
    break;
    case 3 :
       x = "Low";
    break;
    case 4 :
       x = "Medium";
    break;
    case 5 :
       x = "Medium";
    break;
    case 6 :
       x = "Medium";
    break;
    case 7 :
       x = "High";
    break;
    case 8 :
       x = "High";
    break;
    case 9 :
       x = "High";
    break;
    default :
       x = "Out of the Limit";
    break;
}
return x;
}
console.log(hello(5));