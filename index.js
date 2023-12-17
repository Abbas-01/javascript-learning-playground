const titleCase = (str) => {
    let stringArr  = str.split(" ");
    const newStringArr = stringArr.map(string => {
        let firstLetter = string[0].toUpperCase();
        return firstLetter + string.slice(1).toLowerCase();
    })
    return newStringArr.join(" ")
}
console.log(titleCase("abbas here hello aasdi adas"))