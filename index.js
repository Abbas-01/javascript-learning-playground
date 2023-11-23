const x = (first, last, ...arg) => {
    let fullName = first + " " + last;
    arg.forEach(element => {
        console.log(element);
    })
    return fullName;
}
console.log(x("Asad", "Chang", "Matric", "Matli"));