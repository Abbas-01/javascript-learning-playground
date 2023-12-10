const filterStatus = (userStatus) => {
    return data.filter(item => {
        return item.status === userStatus;
    })
};
const data = [
    {
        name: "Abbas",
        age: 15,
        status: "Focused"
    },{
        name: "Ali",
        age: 19,
        status: "Chill"
    },{
        name: "Tanveer",
        age: 24,
        status: "Focused"
    },{
        name: "Asad",
        age: 16,
        status: "Chill"
    },{
        name: "Farzain",
        age: 16,
        status: "Chill"
    }, 
];
console.log(filterStatus("Focused"));