import React from "react";
import WeatherIcon from "./WeatherIcon";
import CurrentDate from "./CurrentDate";
import "./WeatherMain.css";

export default function WeatherTemp(props) {
  return (
    <div className="Container">
      <div>
        <h1>{props.data.city}</h1>
        <span className="today-date">
          <CurrentDate date={props.data.date} />
        </span>
        <h5>{props.data.description}</h5>
        <span>
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={60}
          />
          <h2>{Math.round(props.data.temperature)}°C</h2>
        </span>

        <span>
          Humidity: {props.data.humidity}% | Wind: {props.data.wind} m/s
        </span>
        <br />
      </div>
    </div>
  );
}
