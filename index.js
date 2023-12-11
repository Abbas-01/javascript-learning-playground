const data = [
    {
        userName: "Abbas",
        password: "aod29na0",
        age: 16
    }, {
        userName: "Tanveer",
        password: "a1312ca0",
        age: 24
    },{
        userName: "Farzain",
        password: "adb28a0h",
        age: 16
    },{
        userName: "Ali",
        password: "5623znaa2",
        age: 19
    },{
        userName: "Asad",
        password: "219anghg9",
        age: 16
    },{
        userName: "Hanzala",
        password: "12n9xa1a",
        age: 16
    },
];

const groupByProperty = (arr) => {
    return arr.reduce((acc, currVal) => {
        if (currVal.age > 18) {
            acc.adult.push(currVal);
        } else {
            acc.teen.push(currVal);
        }
        return acc;
    }, {adult: [],teen: []});
};

console.log(groupByProperty(data));