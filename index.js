const arrCheck = (array) => {
    function helo(minRan, maxRan, value) {
        for (let i = minRan; i <= maxRan; i++) {
            if (array[i] === value) {
                return true
            }
        }
        return false;
    }
    return helo(1, 4, 2);
}
console.log(arrCheck([7, 1, 8, 3, 6, 2]));