const dayElement = document.querySelector('.default-day');
const dateElement = document.querySelector('.default-date');
const searchButton = document.querySelector('.btn-search');
const inputElement = document.querySelector('.input-field');
const mainIcon = document.querySelector('.main-icon');
const mainTemp = document.querySelector('.weather-temp');
const weatherDescription = document.querySelector('.weather-text');
const nameValue = document.querySelector('.name-value');
const tempValue = document.querySelector('.temp-value');
const humValue = document.querySelector('.hum-value');
const windValue = document.querySelector('.wind-value');

const apiKey = "1cc2ff0ee9e5e8f6ece64fbcf72409c5";

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
]

// Get current day and display it
const day = new Date();
const dayName = days[day.getDay()];
dayElement.textContent = dayName;

// Get current date and display it
let date = day.getDate();
let month = months[day.getMonth()];
let year = day.getFullYear();
dateElement.textContent = `${date} ${month} ${year}`;


// Function to fetch weather data based on city or country name
function findLocation (name) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
    .then(response => {
        if(!response.ok) {
           mainTemp.textContent = '404';
           weatherDescription.textContent = 'City not found';
        }
        return response.json();
    })
    .then(data => {
        name = data.name;
        console.log(data)
        mainIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        mainTemp.textContent = Math.round(data.main.temp) + "°C";
        weatherDescription.textContent = data.weather[0].description;
        nameValue.textContent = data.name;
        tempValue.textContent = Math.round(data.main.temp) + "°C";
        humValue.textContent = data.main.humidity + "%";
        windValue.textContent =data.wind.speed + " " + "km/h";

    })
    .catch(error => {
        console.log("Error fetching data", error);
    });
}



searchButton.addEventListener('click', () => {
    if(inputElement.value !== ""){        
        const cityName = inputElement.value;        
        findLocation (cityName);
    } else {
      alert("Please enter valid city or country name");
    }     
})

