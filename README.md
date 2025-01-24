# Weather App

This is a simple weather application that allows users to search for the current weather of a specific city or country. The app retrieves weather data from the OpenWeatherMap API and displays relevant weather information, including temperature, humidity, wind speed, and weather description.

Live demo: [**Click here**](https://daliet.github.io/weather-app/).

## Features

Display the current day and date
Search for weather information by city or country
Show the temperature, weather description, humidity, and wind speed
Show an icon representing the current weather condition

## Technologies Used

* JavaScript
* HTML
* CSS
* OpenWeatherMap API

## Installation

1. Clone the repository:
```sh
 git clone https://github.com/daliet/weather-app.git
```
2. Navigate to the project directory:
```sh 
cd weather-app
```
3. Change API key in the main.js file
```javascript
const apiKey = "Your API Key";
``` 
4. Open `index.html` in your browser to view the app.

## How to Use

* Open the app in your browser.
* Enter the name of the city or country in the input field.
* Click on the "Search" button to fetch and display the weather information.

## How It Works

* The app fetches data from the OpenWeatherMap API based on the city name entered in the search input field.
* Once a valid city or country name is entered, the weather information is fetched and displayed.
* If an invalid city name is entered, the app displays a "404" and "City not found" message.

## Code Explanation

* Weather Data Fetching: The app uses the fetch function to get weather data from the OpenWeatherMap API, using a city name entered by the user.
* Displaying Weather Information: The data is then used to update various elements on the page, such as temperature, weather description, humidity, and wind speed.
* Handling Errors: If the city name is invalid, an error message is displayed.

### API Key

The app uses the OpenWeatherMap API, and you must replace the apiKey in the script with your own API key. You can get a free API key by signing up on OpenWeatherMap.