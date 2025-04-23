import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SearchForm from "./../Weather/SearchForm";

const MovieApp = () => {
  const [query, setQuery] = useState("recent"); // Search query
  const [movies, setMovies] = useState([]); // Movie list
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Fetch movies with the default query on page load
    doubleFetchMovies("a");
  }, []);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery) {
      setLoading(true); // Set loading before fetching
      fetchMovies(newQuery); // Fetch movies dynamically
    } else {
        fetchMovies("a"); // defaulting to A fro now
    }
  };

  const fetchMovies = async (searchQuery) => {
    try {
      const API_URL = `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(searchQuery)}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.description || []); // Update movie list
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

const doubleFetchMovies = async () => {
    try {
        const urls = [
            `https://imdb.iamidiotareyoutoo.com/search?q=a`,
            `https://imdb.iamidiotareyoutoo.com/search?q=b`
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));

        const mergedData = data.flatMap(item => item.description || []);
        setMovies(mergedData);
    } catch (error) {
        console.error("Error fetching movies:", error);
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="movie-app">
      <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#333", color: "#fff" }}>
      </header>
      <section className="search-section">
        <SearchForm query={query} onSearchChange={handleInputChange} placeholderText={"Search Movie"} />
      </section>
      <section>
        {loading ? (
          <p style={{ textAlign: "center", color: "#fff" }}>Updating...</p>
        ) : (
          <MovieList movies={movies} />
        )}
      </section>
    </div>
  );
};

export default MovieApp;