const countOccurrences = (arr) => {
    return arr.reduce((acc, currVal) => {
        if (acc[currVal]) {
            acc[currVal]++;
        } else {
            acc[currVal] = 1;
        }
        return acc;
    }, {});
}

console.log(countOccurrences(["Abbas", "Nissan", "Tanveer", "Abbas", "Nissan", "Tanveer", "Abbas"]));