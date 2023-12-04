const isPalindrome = (number) => {
    let x = 0;
    while (number > 10) {
        x += number % 10;
        number = Math.floor(number / 10);
    }
    return x + number;
}
console.log(isPalindrome(5511217));