const users = [
    {
        name: "Abbas",
        born: 2008
    }, {
        name: "Asad",
        born: 2007
    }, {
        name: "Farzain",
        born: 2009
    }, {
        name: "Hanzala",
        born: 2002
    }
]

users.sort((a, b) => b.born - a.born);
console.log(users)