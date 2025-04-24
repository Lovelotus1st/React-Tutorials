import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/Weather/WeatherApp";
import MovieApp from "./components/Movies/MovieApp";
import Game from "./components/Games/Game";

const AppRouter = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/weather" replace />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/movies" element={<MovieApp />} />
          <Route path="/games" element={<Game />} />
        </Routes>
      </Router>
    );
  };

export default AppRouter;