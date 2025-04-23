import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/Weather/WeatherApp";
import MovieApp from "./components/Movies/MovieApp";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/movies" element={<MovieApp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;