import "./App.css";
import SearchWeather from "./SearchWeather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <SearchWeather defaultCity="Hong Kong" />
        </div>
      </div>
      <footer>
        <a href="https://github.com/angelajazz/weather-app">Open-source code</a>{" "}
        by Angela Jazz
      </footer>
    </div>
  );
}

export default App;
