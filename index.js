/* 
We created an array, in this array we have one element which is an object and in this Object we have total 4 properties, two strings, one number and one array, the name of the array is t-languages and in this array we have total 3 elements.

First we try to console log the name property of the first Object. So, first we have select the array with it's name, then we select the obj with zero index using bracket notation, and then we selected the name property using bracket notation because it has quotes.

Second we try to console log the first object's t-languages array's second element. So, first we have select the array with it's name, then we select the obj with zero index using bracket notation, then we selected the t-language array using bracket notation because it has special characters in it and then we selected the second element with one index using bracket notation.

Third we try to console lo the second object's "c-language" property. So first we have to select the array using it's name,
then we select the object using 1 index, and then we select the c-language property using bracket notation. 
*/


let cmpObj = [
    {
        "name": "Abbas",
        "age": 15,
        "c-language": "JavaScript",
        "t-languages" : ["HTML", "CSS", "JavaScript"]
    },
    {
        "name": "Asad",
        "age": 16,
        "c-language": "CSS",
        "t-languages": ["HTML", "CSS"]
    }
];

console.log(cmpObj[0]["name"]);
console.log(cmpObj[0]["t-languages"][2]);
console.log(cmpObj[1]["c-language"]);