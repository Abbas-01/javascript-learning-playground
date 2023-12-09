    const isPalindrome = (str) => {
        for (let i = 0; i < str.length / 2; i++) {  
            if(str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    
    const helo = (arr) => {
        return arr.filter(item => {
            if (isPalindrome(item.toLowerCase())) {
                return item;
            }
        });
    }

    const x = ["AbsbA", "civic", "Nissan", "amma"];
    console.log(helo(x));