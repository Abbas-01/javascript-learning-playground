let array = [
    {
        marks: 20,
        name: "Abbas",
        age: 15
    }, {
        marks: 10,
        name: "Asad",
        age: 16
    }, {
        marks: 41,
        name: "Farzain",
        age: 16
    }, {
        marks: 23,
        name: "Umair",
        age: 16
    }, {
        marks: 49,
        name: "Hanzala",
        age: 16
    }, {
        marks: 36,
        name: "Khizar",
        age: 16
    }
];

const result = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i].marks < data[j].marks) {
                let x = data[i];
                data[i] = data[j];
                data[j] = x;
            }
        }
    }

    for (let i = 0; i < data.length; i++) {
        data[i].rank = i + 1;
    }
}

result(array);
console.log(array[2].rank)