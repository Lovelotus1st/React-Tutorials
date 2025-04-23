import React from "react";

const CityForm = ({ city, onCityChange }) => {
  return (
    <form style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={city}
        onChange={onCityChange}
        placeholder="Enter city name"
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </form>
  );
};

export default CityForm;