/* jo array parameter hai wo aur x variable dono ka aik hi reference tha memory ma to phr hamna array parameter ko jab equal/assignment operator lga kr alag sa aik value assign ki to isna aik new location create kr li memory ma  */

let x =  [1, 2];
console.log(x); // Returns [1, 2]
add(x, 4);
console.log(x); // Returns [1, 2]
function add(array, element) {
    array = [element]
    console.log(array); // Returns [4]
};
