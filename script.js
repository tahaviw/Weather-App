const inputEl = document.querySelector("#cityname")
const searchBtn = document.querySelector(".search-btn")

searchBtn.addEventListener("click", function() {
    const cityName = inputEl.value
    const apiKey = "96bb4fadaf7de4b6181472b18b4e3654"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    
    
    // the fetch url to call the api
    fetch(url)
        //make promise (empty box that waits for the respond as data)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
        })
})
