const doubledArr = (arr) => {
    let doubledArray = arr.map(a => {
        return a + a;
    });
    return doubledArray;
};

const x = [2, 3, 4, 5, 8];
console.log(doubledArr(x));

