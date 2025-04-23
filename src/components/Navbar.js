import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}><a href="/" style={linkStyle}>Home</a></li>
        <li style={navItemStyle}><a href="/about" style={linkStyle}>Projects</a></li>
        <li style={navItemStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
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

const linkStyle = {
  color: "#4fc3f7",
  textDecoration: "none",
};

export default Navbar;