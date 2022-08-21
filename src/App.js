import "./App.css";
import SearchWeather from "./SearchWeather";
import WeatherTemp from "./WeatherTemp";
import Description from "./Description";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          {" "}
          <SearchWeather />
          <h1>Hong Kong</h1>
          <WeatherTemp />
          <Description />
          <Forecast />
        </div>
      </div>
      <a href="https://github.com/angelajazz/weather-app">
        Open-source code
      </a>{" "}
      by Angela Jazz
    </div>
  );
}

export default App;
