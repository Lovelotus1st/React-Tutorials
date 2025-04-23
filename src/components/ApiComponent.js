import React, { useState } from "react";
import axios from "axios";
import CityForm from "./Weather/SearchForm";
import WeatherTable from "./Weather/WeatherTable";
import config from "./config";
import "./../styles/App.css";

const ApiComponent = () => {
  const [search, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const newCity = event.target.value;
    setCity(newCity);

    if (newCity) {
      axios
        .get(`${config.apiUrl}?key=${config.apiKey}&q=${newCity}`)
        .then(response => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching the Weather API:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="weather-app">
      <header className="header">
        
        <h1>Weather App</h1>
      </header>
      <div className="search-bar"><section className="search-section">
        <CityForm search={search} onCityChange={handleInputChange} />
      </section></div>
      <section className="table-section">
        {loading && <p>Updating...</p>}
        {weatherData ? <WeatherTable weatherData={weatherData} /> : !loading && <p>No data available</p>}
      </section>
    </div>
  );
};

export default ApiComponent;