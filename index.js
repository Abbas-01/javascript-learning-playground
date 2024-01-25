function greetings () {
    return "Hello!"
}
function intro (name, city) {
    return `My name is ${name}, i'm from ${city}`;
}
const hobbies = ["Gaming", "Coding", "Travelling"]; 
export default function favouriteFood (food) {
    return `My favourite food is ${food}`;
}
export { hobbies, greetings, intro }