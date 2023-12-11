const concatStrings = (arr) => {
    return arr.reduce((acc, currval) => acc+ " " + currval);
}

console.log(concatStrings(["Hello", "My", "Name", "is", "Abbas"]));