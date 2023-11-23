let x = "Hello World";
console.log(x); // Returns Hello World
console.log(...x); // Returns H e l l o   W o r l d

let y = ["Hello", "World"];
console.log(y); // Returns ['Hello', 'World']
console.log(...y); // Returns Hello World

let z = {
    name: "Abbas",
    father: "Ashiq",
    languages: ["HTML", "CSS", "Javascript"]  
}
console.log(z.father) // Returns Ashiq
console.log(z.languages) // Returns (3) ['HTML', 'CSS', 'Javascript']
console.log(...z.father) // Returns A s h i q
console.log(...z.languages) // Returns HTML CSS Javascript