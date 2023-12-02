let a = "Abbas";
const impureFunc = (lastName) => {
  a = a + " " + lastName; 
}
impureFunc("Ali");
console.log(a);

const impureFuncTwo = (maxNumber) => {
  return Math.random() * maxNumber;
}
console.log(impureFuncTwo(5));