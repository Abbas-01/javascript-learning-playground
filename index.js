const remDuplicate = (arr) => {
    const removeDup = new Set(arr);
    const nonDuplicate = Array.from(removeDup);
    return nonDuplicate;
}
let a = [1, 2, 5, 2, 1, 34, 51]
console.log(remDuplicate(a))