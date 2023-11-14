function hello(val) {   
    if (typeof val === "string" && val.length <  3) {
        console.log("There are less than three letters in this word");
    } else if (typeof val === "string" && val.length < 4) {
        console.log("There are less than four letters in this word");
    } else if (typeof val === "string" && val.length < 5) {
        console.log("There are less than five letters in this word");
    } else if (typeof val === "string" && val.length < 6) {
        console.log("There are less than six letters in this word");
    } else if (typeof val === "string" && val.length < 7) {
        console.log("There are less than seven letters in this word");
    } else if (typeof val === "string" && val.length > 7) {
        console.log("There are more than seven letters/characters in this word");
    } else {
        console.log("Letters are only Characters")
    }
}

hello("This is ball");