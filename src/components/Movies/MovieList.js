import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div style={movieListStyle}>
      {movies.map((movie) => (
        <a
          key={movie["#IMDB_ID"]}
          href={movie["#IMDB_URL"]}
          target="_blank"
          rel="noopener noreferrer"
          style={movieCardLinkStyle} // Styling for clickable cards
        >
          <div style={movieCardStyle}>
            <img
              src={movie["#IMG_POSTER"]}
              alt={movie["#TITLE"]}
              style={moviePosterStyle}
            />
            <div style={movieDetailsStyle}>
              <span style={movieTitleStyle}>{movie["#TITLE"]}</span>
              <span>Year: {movie["#YEAR"]}</span>
              <span style={movieActorsStyle}>Actors: {movie["#ACTORS"]}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

const movieListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  padding: "20px",
  backgroundColor: "#121212",
};
  
const movieCardLinkStyle = {
textDecoration: "none",
color: "inherit",
":hover": {
    transform: "scale(1.15)", // Slightly enlarge the card on hover
},
};

const moviePosterStyle = {
  width: "100%",
  height: "350px", // Uniform height for all posters
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
};

const movieCardStyle = {
    backgroundColor: "#1f1f1f",
    borderRadius: "10px",
    overflow: "hidden",
    color: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    height: "450px", // Fixed height for all cards
    display: "flex",
    flexDirection: "column",
  };
  
  const movieDetailsStyle = {
    padding: "15px",
    flexGrow: 1, // Allow the text section to grow evenly
    overflow: "hidden", // Ensure the content doesn't overflow
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  
  const movieTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    whiteSpace: "nowrap", // Prevent wrapping for long titles
    overflow: "hidden", // Hide overflow text
    textOverflow: "ellipsis", // Add "..." for overflowed text
  };
  
  const movieActorsStyle = {
    fontSize: "14px",
    color: "#ccc",
    overflow: "hidden", // Hide overflow text
    textOverflow: "ellipsis", // Add "..." for overflowed text
    whiteSpace: "nowrap", // Prevent wrapping
  };
  
export default MovieList;