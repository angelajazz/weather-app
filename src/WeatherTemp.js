import React from "react";

export default function WeatherTemp() {
  return (
    <div className="App">
      <div className="row row-cols-3">
        <div className="col2">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            id="weather-icon"
            width="100px"
            alt="icon weather"
          />
        </div>
        <div className="col2">
          <h2>30º</h2>
        </div>
        <div class="col2">Sunny</div>
      </div>
    </div>
  );
}
