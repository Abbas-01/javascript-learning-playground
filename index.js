const recursiveFunc = (num) => {
    if (num === 10) { // Base Condition
        console.log(num);
        return;
    }

    console.log(num);
    recursiveFunc(num + 1); // Recursive Call
}

recursiveFunc(2);