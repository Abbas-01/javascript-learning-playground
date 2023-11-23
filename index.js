const x = (first, last, arg) => {
    let fullName = first + " " + last;
    // let modArrr = arg.map(x => "Hello " + x);
    let hello = arg.pop();
    return [fullName, hello] 
}
console.log(x("Asad", "Chang", ["Matric", "Matli"]));