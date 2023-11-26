const loginSystem = (userName, pass) => {
    if (userName === "user" && pass === "password") {
        return "You have logged in Successfully !"
    } else if (userName !== "user" && pass !== "password") {
            return Error("Both UserName and Password are incorrect Try Again!");
    } else if (userName !== "user") {
            return Error(" UserName is incorrect Try Again!");
    } else if ( pass !== "password") {
            return Error("Password is incorrect Try Again!");
    }
    }
console.log(loginSystem("user", "password"));
console.log(loginSystem("uer", "assword"));
console.log(loginSystem("use", "password"));
console.log(loginSystem("user", "passwor"));
