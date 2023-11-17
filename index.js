let person = {
    "name": "Abbas",
    "age": 16,
    "language": "JavaScript"
}

function hasProperty(prop) {
    if(person.hasOwnProperty(prop)) {
        return person[prop]
    } else {
        return "Declare Age property"
    }
}
console.log(hasProperty("language"))
