const isVowel = (alpha) => {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === alpha) {
            return true;
        }
    }
    return false;
}
console.log(isVowel("q"));
console.log(isVowel("e"));
console.log(isVowel("z"));
console.log(isVowel("a"));
console.log(isVowel("y"));
console.log(isVowel("x"));
