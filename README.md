# Weather App

A lightweight, client-side weather application that queries the OpenWeatherMap API in real time. Enter any city name and instantly retrieve live temperature, humidity, and weather conditions — no backend, no build step, no dependencies.

---

## Features

- **Live weather data** via OpenWeatherMap REST API (`/data/2.5/weather`)
- **Async/await fetch pipeline** with structured error handling (`try/catch`)
- **HTTP-level error discrimination** — differentiates API 404 (city not found) from network failures
- **Glassmorphism UI** with animated background, responsive typography using `clamp()`, and staggered CSS animations
- **Fully responsive** — mobile-first breakpoints at 768px and 480px
- **Zero dependencies** — vanilla HTML, CSS, and JavaScript only

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Markup     | HTML5 (semantic)                  |
| Styling    | CSS3 (custom properties, clamp, backdrop-filter, keyframes) |
| Logic      | Vanilla JavaScript (ES2017+ async/await) |
| Data       | OpenWeatherMap API (REST, JSON)   |
| Fonts      | Google Fonts — Inter              |

---

## Setup

**Prerequisites:** A free [OpenWeatherMap API key](https://openweathermap.org/api).

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/weather-app.git

# 2. Navigate into the project
cd weather-app
```

Open `script.js` and replace the `apiKey` value with your own:

```js
const apiKey = "YOUR_API_KEY_HERE"
```

```bash
# 3. Open locally — no build step required
open index.html        # macOS
xdg-open index.html    # Linux
```

> **Note:** The API key is exposed in client-side JS. For production, proxy requests through a backend to keep the key private.

---

## Usage

1. Type a city name into the input field (e.g., `Rabat`, `Tokyo`, `New York`)
2. Click **Search**
3. Weather data renders in the card below:
   - City name
   - Temperature (°C)
   - Humidity (%)
   - Weather description

If the city is not found, a styled error state is displayed. Network failures are caught and surfaced separately.

---

## Architecture

```
index.html
│
├── style.css          # All visual logic — layout, animation, responsive breakpoints
└── script.js          # All application logic
    │
    ├── DOM selectors  # input, button, display container
    ├── Event listener # click → getWeather()
    └── getWeather()
        ├── Constructs URL with city + API key + units=metric
        ├── fetch() → response.json()  [both awaited]
        ├── Checks data.cod === 200    [API-level validation]
        ├── Injects HTML template literal into #container
        └── catch(error)               [network-level fallback]
```

**Data flow:**

```
User input → fetch(OpenWeatherMap URL) → JSON response
→ cod check → template literal → DOM injection
```

No localStorage, no state management library, no framework. Single async function handles the full request/response cycle.

---

## Known Limitations

- API key is hardcoded in client-side JS — not suitable for production as-is
- No debouncing on the search button (multiple rapid clicks will fire multiple requests)
- No loading indicator between request and response
- `data.cod` check uses loose equality (`===`) against `200` (integer), which is correct for this endpoint but worth noting

---

## Author

**Taha Belghiti** — Junior Front-End Developer  
Built with HTML, CSS, and JavaScript · © 2026
