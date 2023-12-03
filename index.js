const isPalindrome = (string) => {
    if (string.length <= 1) {
        return true;
    }
    if (string[0] === string[string.length -1]) {
        return isPalindrome(string.slice(1, -1));
    } else {
        return false;
    }
}

console.log(isPalindrome([1, 2, 5, 2, 1]));
