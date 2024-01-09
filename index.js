const baseUrl = "https://api.openweathermap.org/data/2.5/";

const weatherDetailsContainer = document.querySelector(".weatherDetails");
const otherDetails = document.querySelector(".otherDetails");
const hideOrShow = document.querySelectorAll(".hideShow") 
const cityInputField = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const cityTempEle = document.querySelector(".cityTemp");
const cityNameEle = document.querySelector(".cityName");
const cityWeatherEle = document.querySelector(".cityWeather");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const weatherImage = document.querySelector("#weatherImg");
const cities = document.querySelectorAll(".cityNames");


function validatingCityName (cityName) {
    const firstNumIndex = cityName.split("").findIndex(char => !isNaN(Number(char)));
    if (cityName === "") {
        alert("please give us a name first")
    } else if (firstNumIndex >= 0) {
        alert("Please give us valid name");
    } else {    
        gettingCurrentWeather(cityName);   
        
    }
}

function displayingWeather (data) { 
    cityNameEle.innerHTML = `${data.name}, ${data.sys.country}`;
    cityTempEle.innerHTML = `${Math.round(data.main.temp)}<span class="dot">&#8728;C</span>`;
    cityWeatherEle.innerHTML = `${data.weather[0].main}`;
    humidity.innerHTML = `${data.main.humidity} %`;
    windSpeed.innerHTML = `${Math.round((data.wind.speed * 3600) / 1000)} Km/h`;
    weatherImage.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
}
async function gettingCurrentWeather(cityName) {
    const response = await fetch(`${baseUrl}weather?q=${cityName}&appid=20bce2cb30ef0934691dcac34c7f8f0c&units=metric`);
    if (response.status !== 200) {
        cityInputField.value = "";
    } else {
        const data = await response.json();
        displayingWeather(data);
    }
}
cities.forEach(city => {
    let cityName = city.innerHTML;
    city.addEventListener("click", () => {
        gettingCurrentWeather(cityName)
    })
})

if (cityInputField.value === "") {
    gettingCurrentWeather(cities[0].innerHTML)
}
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cityName = cityInputField.value;
    cityName = cityName.replaceAll(" ", '')
    validatingCityName(cityName);
})
