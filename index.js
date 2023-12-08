const filterWords = (arr) => {
    return arr.filter(word => {
        return word.length > 5;
    })
} 

const wordsArr = ["Tree", "Aeroplane", "Book", "Laptop", "Computer", "Window"];
console.log(filterWords(wordsArr));