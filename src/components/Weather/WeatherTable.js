import React from "react";
import "./../../styles/WeatherTable.css";

const WeatherTable = ({ weatherData }) => {
  return (
    <table className="weather-table">
      <tbody>
        <tr>
          <td>Location</td>
          <td>{weatherData.location.name}</td>
        </tr>
        <tr>
          <td>Region</td>
          <td>{weatherData.location.region}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{weatherData.location.country}</td>
        </tr>
        <tr>
          <td>Local Time</td>
          <td>{weatherData.location.localtime}</td>
        </tr>
        <tr>
          <td>Temperature (°C)</td>
          <td>{weatherData.current.temp_c}</td>
        </tr>
        <tr>
          <td>Temperature (°F)</td>
          <td>{weatherData.current.temp_f}</td>
        </tr>
        <tr>
          <td>Condition</td>
          <td>{weatherData.current.condition.text}</td>
        </tr>
        <tr>
          <td>Wind Speed (mph)</td>
          <td>{weatherData.current.wind_mph}</td>
        </tr>
        <tr>
          <td>Wind Speed (kph)</td>
          <td>{weatherData.current.wind_kph}</td>
        </tr>
        <tr>
          <td>Wind Direction</td>
          <td>{weatherData.current.wind_dir}</td>
        </tr>
        <tr>
          <td>Humidity (%)</td>
          <td>{weatherData.current.humidity}</td>
        </tr>
        <tr>
          <td>Pressure (mb)</td>
          <td>{weatherData.current.pressure_mb}</td>
        </tr>
        <tr>
          <td>Visibility (km)</td>
          <td>{weatherData.current.vis_km}</td>
        </tr>
        <tr>
          <td>UV Index</td>
          <td>{weatherData.current.uv}</td>
        </tr>
        <tr>
          <td>Gust Speed (mph)</td>
          <td>{weatherData.current.gust_mph}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;