const personName = document.querySelector("#personName");
const followers = document.querySelector("#followersCount");
const userImg = document.querySelector("#image");

const xhr = new XMLHttpRequest();
const requestURL = "https://api.github.com/users/hiteshchoudhary"; 
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        userImg.setAttribute("src", `${data.avatar_url}`)
        personName.innerHTML = `${data.name}`;
        followers.innerHTML = `${data.followers}`;
    }
}
xhr.send();   