function wordBlank (myNoun, myAdjective, myVerb, myAdverb) {
    let sentence = "";
    sentence += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
    return sentence;
}
console.log(wordBlank("Dog", "Playful", "jumps", "happily"));