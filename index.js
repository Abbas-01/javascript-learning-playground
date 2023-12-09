const remDuplicate = (arr) => {
    return arr.filter((num, i, arr) => {
        return (!arr.includes(num, i + 1))
    })
} 
console.log(remDuplicate([1, 2, 4, ,55,1 , 2]));