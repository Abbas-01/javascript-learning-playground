const url = ("https://jsonplaceholder.typicode.com/posts");
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        user_Id: 404,
        name: "Abbas",
        hobbies: "Coding, Gaming, Eating"
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})

