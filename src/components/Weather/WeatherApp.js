import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import WeatherTable from "./WeatherTable";
import config from "./../config";

const WeatherApp = () => {
  const [search, setSearch] = useState(""); // For manual search
  const [weatherData, setWeatherData] = useState(null); // Weather information
  const [loading, setLoading] = useState(false); // Loading indicator

  // Fetch weather data by location (latitude and longitude)
  const fetchWeatherByLocation = (latitude, longitude) => {
    setLoading(true);
    const API_URL = `${config.apiUrl}?key=${config.apiKey}&q=${latitude},${longitude}`; // Query using latitude & longitude

    axios
      .get(API_URL)
      .then((response) => {
        setWeatherData(response.data); // Set fetched weather data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  // Get user's current location on page load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve location. You can search manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []); // Runs only on the first render

  // Handle manual input for searching weather by city or zip
  const handleInputChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);

    if (newSearch) {
      setLoading(true); // Set loading before fetching
      axios
        .get(`${config.apiUrl}?key=${config.apiKey}&q=${newSearch}`)
        .then((response) => {
          setWeatherData(response.data); // Set fetched weather data
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="weather-app">
      <section className="search-section">
        {/* Search Form for manual weather search */}
        <SearchForm
          search={search}
          onSearchChange={handleInputChange}
          placeholderText={"Enter zip or city Name"}
        />
      </section>
      <section className="table-section">
        {/* Loading or WeatherTable */}
        {loading && <p>Updating...</p>}
        {weatherData ? (
          <WeatherTable weatherData={weatherData} />
        ) : (
          !loading && <p>No data available</p>
        )}
      </section>
    </div>
  );
};

export default WeatherApp;