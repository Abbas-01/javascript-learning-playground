const url = ("https://jsonplaceholder.typicode.com/posts/1");
fetch(url, {
    method: "PUT",
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

