const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const weatherDetailsContainer = document.querySelector(".weatherDetails");
const otherDetails = document.querySelector(".otherDetails");
const hideOrShow = document.querySelectorAll(".hideShow") 
const cityInputField = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const cityTempEle = document.querySelector(".cityTemp");
const cityNameEle = document.querySelector(".cityName");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const weatherImage = document.querySelector("#weatherImg");

function resetingElements () {
    otherDetails.style.display = "none";
    hideOrShow.forEach(ele => {
        ele.style.display = "none";
    })
}
function displayingWeather (data) {
    cityTempEle.innerHTML = `${Math.round(data.main.temp)} <span class="dot">&#8728;</span>C`;
        cityNameEle.innerHTML = `${data.name}`;
        humidity.innerHTML = `${data.main.humidity} %`
        windSpeed.innerHTML = `${Math.round((data.wind.speed * 3600) / 1000)} Km/h`
        switch (data.weather[0].main) {
            case "Clouds": 
            weatherImage.setAttribute("src", "/img/clouds.png");
            break;
            case "Mist" :
                weatherImage.setAttribute("src", "/img/mist.png");
            break;
            case "Snow" :
                weatherImage.setAttribute("src", "/img/snow.png");
            break;
            case "Rain" :
                weatherImage.setAttribute("src", "/img/rain.png");
            break;
            case "Clear" :
                weatherImage.setAttribute("src", "/img/sun.png");
            break;
            case "Haze" :
                weatherImage.setAttribute("src", "/img/haze.png");
            break;
            default :
                weatherImage.setAttribute("src", "/img/clear-sky.png");
            break;
        }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cityName = cityInputField.value;
    cityName = cityName.replaceAll(" ", '')
    const firstNumIndex = cityName.split("").findIndex(char => !isNaN(Number(char)));
    resetingElements()
    if (cityName === "") {
        alert("please give us a name first")
    } else if (firstNumIndex >= 0) {
        alert("Please give us valid name");
    } else {
        weatherDetailsContainer.style.display = "block";
        gettingWeather(cityName);   
    }
})
async function gettingWeather(cityName) {
    const response = await fetch(`${baseUrl}q=${cityName}&appid=20bce2cb30ef0934691dcac34c7f8f0c&units=metric`);
    if (response.ok === false || response.status !== 200) {
        hideOrShow[0].style.display = "block"
        hideOrShow[0].innerHTML = `Sorry we are unable to get the weather details of "${cityName}"`;
        weatherImage.setAttribute("src", "/img/33.png");
        cityInputField.value = "";
    } else {
        hideOrShow[1].style.display ="block";
        hideOrShow[2].style.display ="block";
        otherDetails.style.display = "flex";
        const data = await response.json();
        displayingWeather(data);
    }
}