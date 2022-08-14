import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="App">
      <div className="container">
        <div className="ForecastList">
          <div className="f-list">
            <ul>
              <li>Tue</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>28º 30º</li>
            </ul>
          </div>
          <div className="f-list">
            <ul>
              <li>Wed</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>30º 33º</li>
            </ul>
          </div>
          <div className="f-list">
            <ul>
              <li>Thur</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>30º 33º</li>
            </ul>
          </div>
          <div className="f-list">
            <ul>
              <li>Fri</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>29º 31º</li>
            </ul>
          </div>
          <div className="f-list">
            <ul>
              <li>Sat</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>27º 30º</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
