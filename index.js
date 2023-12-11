const revString = (str) => {
  return str.split("")  .reduce((acc, currVal) => {
    return currVal + acc  
  }, " ")
}

console.log(revString("Abbas"));