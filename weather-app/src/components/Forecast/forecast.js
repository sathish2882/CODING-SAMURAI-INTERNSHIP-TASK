import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="daily item img"
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div className="daily-details-item">
                  <label>Pressure</label>
                  <label className="daily-details-sub-items">{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label className="daily-details-sub-items">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-item">
                  <label>Clouds</label>
                  <label className="daily-details-sub-items">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-item">
                  <label>Wind speed</label>
                  <label className="daily-details-sub-items">{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-item">
                  <label>Sea level</label>
                  <label className="daily-details-sub-items">{item.main.sea_level}m</label>
                </div>
                 <div className="daily-details-item">
                  <label>Feels like</label>
                  <label className="daily-details-sub-items">{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
