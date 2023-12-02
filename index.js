const greet = (name = "Stranger") => {
  return `Hello! ${name}`
}
const helo = (callBack, person) => {
  return callBack(person);
}
// console.log(helo(greet, "Abbas"));
console.log(helo(greet, "Abbas"))

