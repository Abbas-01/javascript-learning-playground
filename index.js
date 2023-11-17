let nestArr = [
    [ "Hello",
        {
            name: "Abbas",
            age : 16,
            class : "Matric",
            city : "Matli",
            languages: ["HTML", "CSS", "JavaScript"]
        },
        ["Pakistan", "Asia", "Earth", "MilkyWay"]
    ], [
        "Welcome",
        {
            name : "Asad",
            age : 16,
            class : "Matric",
            city : "Matli",
            languages : ["HTML", "CSS"],
        },
        ["Pakistan", "Asia", "Earth", "MilkyWay"]
    ]
];

console.log(`${nestArr[0][0]} ${nestArr[0][1].name} ${nestArr[0][1].languages[1]} ${nestArr[0][1].city} ${nestArr[0][2][0]}`);
console.log(`${nestArr[0][0]} ${nestArr[1][1].name} ${nestArr[1][1].class} ${nestArr[1][1].city} ${nestArr[1][2][0]}`)