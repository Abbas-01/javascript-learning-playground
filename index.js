let stringsArr = ["ElementOne", "ElementTwo", "ElementThree", "ElementFour"];

stringsArr.forEach((a, i, arr) => {
    arr[i] = `${a} Updated`
})
console.log(stringsArr)