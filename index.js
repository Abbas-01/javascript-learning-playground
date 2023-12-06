const usersNameArr = (arr) => {
    return arr.map((a, i, arr) => {
        return a.userName;
    })
};

const usersData = [{
    userName: "Abbas-01",  
    age: 15,
    city: "Matli"
}, {
    userName: "Tanveer786",
    age: 23,
    city: "Matli"
}, {
    userName: "Aleey1",
    age: 19,
    city: "Matli"
}, {
    userName: "Asad-Ullah",
    age: 16,
    city: "Matli"
}, {
    userName: "Farzain_Ahmed",
    age: 16,
    city: "Matli"
}];
console.log(usersNameArr(usersData));
