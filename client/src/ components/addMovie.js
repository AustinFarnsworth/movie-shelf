import React, {useState, useContext} from "react";
import {MovieContext} from "../context/movieContext";
import imdb from "../api/imdb";
import "./addMovie.css";

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
      <label className="movie-label">Movie</label>
      <input
        className="form-input"
        type="text"
        name="name"
        value={name}
        onChange={updateName}
      />
      <label className="rating-lable">Rating</label>
      <input
        className="form-input"
        type="text"
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
