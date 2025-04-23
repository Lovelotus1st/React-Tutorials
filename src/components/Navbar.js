import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
      <li style={navItemStyle}>
          <Link to="/movies">
            Movies
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/weather">
            Weather
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
};

const navListStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
};

const navItemStyle = {
  marginRight: "20px",
};

export default Navbar;