import React, {useState, useContext} from "react";
import Movies from "./movies";
import {MovieContext} from "../context/movieContext";

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movies name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviesList;
