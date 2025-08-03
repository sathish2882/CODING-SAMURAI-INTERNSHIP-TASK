import { FaLocationDot } from "react-icons/fa6";
import "./CurrentWeather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top-container">
        <div className="temprerature-container">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <div className="icon-container">
            <img
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
              alt="current weather img"
            />
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
        </div>
        <p className="city"><FaLocationDot /> {data.city}</p>
      </div>

      <div className="bottom-container">
        <div className="details">
          <div className="parameter">
            <span className="parameter-label-top">details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
