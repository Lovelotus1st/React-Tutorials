import React from "react";

const SearchForm = ({ search, onSearchChange, placeholderText }) => {
  return (
    <form style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={search}
        onChange={onSearchChange}
        placeholder={placeholderText}
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </form>
  );
};

export default SearchForm;