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
      Open-source code by Angela Jazz
    </div>
  );
}

export default App;
