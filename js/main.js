const apiKey = "607dc89b45d1691f0ee3e7e49fb43c61";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputBar = document.querySelector(".search-bar input");
const inputBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".section-img");
function inputLength() {
  return inputBar.value.length;
}

async function weather(city) {
  const reply = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (reply.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".section").style.display = "none";
  } else {
    var info = await reply.json();

    // console.log(info); -----   to check our json data

    document.querySelector(".temperature").innerHTML =
      Math.round(info.main.temp) + "°C";
    document.querySelector(".city").innerHTML = info.name;
    document.querySelector(".humidity").innerHTML = info.main.humidity + "%";
    document.querySelector(".wind").innerHTML = info.wind.speed + "Km/h";
    document.querySelector(".weather-type").innerHTML = `${"Weather Type : "} ${
      info.weather[0].main
    }`;
    inputBar.value = "";

    if (info.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (info.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (info.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (info.weather[0].main == "Haze") {
      weatherIcon.src = "./images/haze.png";
    } else if (info.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (info.weather[0].main == "Mostly Sunny") {
      weatherIcon.src = "./images/Mostly Sunny.png";
    } else if (info.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (info.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
    } else if (info.weather[0].main == "Sunny") {
      weatherIcon.src = "./images/sunny.png";
    } else if (info.weather[0].main == "Thunder Strom") {
      weatherIcon.src = "./images/thunder strom.png";
    }

    document.querySelector(".section").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

function addAfterClick() {
  if (inputLength() > 0) {
    weather(inputBar.value);
  }
}
function addAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    weather(inputBar.value);
  }
}
inputBtn.addEventListener("click", addAfterClick);
inputBar.addEventListener("keydown", addAfterKeypress);
