import "./weather.css";

import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "c70f4db06ac6ff93b1c3662b48670eee";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (city.trim() !== '') {
      try {
        const weatherData = await getWeatherData(city);
        setWeatherData(weatherData);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Could not fetch weather data");
        setWeatherData(null);
      }
    } else {
      setError("Please enter a valid city");
      setWeatherData(null);
    }
  };

  const getWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }
    return await response.json();
  };

  return (
    <div className="weatherWrapper">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="cityInput" 
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
        {weatherData && (
      <div className="card">
        {error && <p className="errorDisplay">{error}</p>}
          <>
            <h1 className="cityDisplay">{weatherData.name}</h1>
            <p className="tempDisplay">
              {((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(1)} F
            </p>
            <p className="humidityDisplay">Humidity: {weatherData.main.humidity} %</p>
            <p className="descDisplay">{weatherData.weather[0].description}</p>
            <p className="weatherEmoji">{getWeatherEmoji(weatherData.weather[0].id)}</p>
          </>
      </div>
        )}
    </div>
  );
}

function getWeatherEmoji(weatherID) {
  switch (true) {
    case (weatherID >= 200 && weatherID < 300):
      return "⛈";
    case (weatherID >= 300 && weatherID < 400):
      return "🌧";
    case (weatherID >= 500 && weatherID < 600):
      return "🌧🌧";
    case (weatherID >= 600 && weatherID < 700):
      return "❄";
    case (weatherID >= 700 && weatherID < 800):
      return "🌁";
    case (weatherID === 800):
      return "☀";
    case (weatherID >= 801 && weatherID < 810):
      return "☁☁";
    default:
      return "❓";
  }
}

export default Weather;