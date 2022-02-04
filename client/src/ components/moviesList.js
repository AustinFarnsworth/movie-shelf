import React, {useState, useContext} from "react";
import "./moviesList.css";
import MovieCard from "./movieCard";
import {MovieContext} from "../context/movieContext";

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard name={movie.title} price={movie.rating} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviesList;
