import { useState } from "react";
import { WeatherApiKey, WeatherApiUrl } from "./api";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    try {
      const currentWeatherResponse = await fetch(
        `${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`
      );

      const forecastResponse = await fetch(
        `${WeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`
      );

      if (!currentWeatherResponse.ok || !forecastResponse.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const weatherData = await currentWeatherResponse.json();
      const forecastData = await forecastResponse.json();

      setCurrentWeather({ city: searchData.label, ...weatherData });
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching weather and forecast data:", error);
    }
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
