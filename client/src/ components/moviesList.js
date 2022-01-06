import React, {useState} from "react";
import Movies from "./movies";

function MoviesList() {
  return (
    <div>
      {movies.map((movie) => (
        <Movies name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviesList;
