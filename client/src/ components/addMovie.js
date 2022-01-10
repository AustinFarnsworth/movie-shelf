import React, {useState, useContext} from "react";
import {MovieContext} from "../context/movieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, {name: name, rating: rating}]);
  };

  return (
    <form>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input
        type="text"
        placeholder="rating"
        name="rating"
        value={rating}
        onChange={updateRating}
      />
      <button type="submit" onClick={addMovie}>
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;
