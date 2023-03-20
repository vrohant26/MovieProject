import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 71cb9d1b
const API_URL = "http://omdbapi.com?apikey=71cb9d1b";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(search)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie1={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
