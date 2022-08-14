import "./App.css";
import Weather from "./Weather";
import WeatherTemp from "./WeatherTemp";
import Description from "./Description";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          {" "}
          <Weather />
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
