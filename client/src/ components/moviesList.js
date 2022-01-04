import React, {useState} from "react";
import Movies from "./movies";

function MoviesList() {
  const [movies, setMovie] = useState([
    {
      name: "Captain America",
      price: "29.99",
      id: "1234",
    },
    {
      name: "The Prestige",
      price: "99.99",
      id: "1233",
    },
    {
      name: "Snitch",
      price: "20.95",
      id: "1232",
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <Movies name={movie.name} />
      ))}
    </div>
  );
}

export default MoviesList;
