const inputEl = document.querySelector("#cityname")
const searchBtn = document.querySelector(".search-btn")
const displayEl = document.querySelector("#container")

searchBtn.addEventListener("click", getWeather)
async function getWeather() {
    const cityName = inputEl.value
    const apiKey = "96bb4fadaf7de4b6181472b18b4e3654" // change API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    try {
        const response = await fetch(url)  // wait for fetch
        const data = await response.json() // wait for json
        if (data.cod === 200) {
            displayEl.innerHTML = `
                <h2>City name: ${data.name}</h2>
                <h2>Temperature: ${data.main.temp} °C</h2>
                <h2>Humidity: ${data.main.humidity}</h2>
                <h2>Description: ${data.weather[0].description}</h2>
            `
            console.log(data)
        } else {
            displayEl.innerHTML = "Error : 404"
            displayEl.classList.toggle("error-handler")
        }
    } catch(error) {
        console.log(error)
        displayEl.innerHTML = `Error!`
    }
}