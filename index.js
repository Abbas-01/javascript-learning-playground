const outerFunc = () => {
    console.log("Outer");
    const innerFunc = () => {
        console.log("Inner");
    }
    innerFunc()
}
outerFunc();