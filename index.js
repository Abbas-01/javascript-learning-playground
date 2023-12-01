const outerFunc = () => {
    let a = "Abbas";
    const innerFunc = () => {
        let b = "Ali";
        console.log(`${b} and ${a}`);
    }
    // console.log(`${a} and ${b}`);
    innerFunc();
}
outerFunc();