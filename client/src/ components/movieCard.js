import React, {useState, useEffect} from "react";
import {MovieContext} from "../context/movieContext";
import "./movieCard.css";
import movieDatabase from "../api/movieDatabase";

const MovieCard = () => {
  const [movies, setMovies] = useState("");
  const [genres, setGenres] = useState("");

  useEffect(() => {
    movieDatabase
      .get("/557")
      .then((response) => {
        console.log(response.data.genres);
        setMovies(response.data);
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="card-container">
        <div className="movie" key={movies.id}>
          <img className="movie-img" src={movies.poster_path} alt="movie" />
        </div>
        <div className="movie-text">
          <div className="column1">
            <h1>{movies.title}</h1>
            <ul className="movie-desc">
              <li>{movies.movieRating}</li>
              <li>{movies.runtime} mins</li>
              {/* <li>{genres}</li> */}
            </ul>
          </div>
          <br />
          <div className="summary-row">
            <div className="colum2">
              <h5>{movies.overview}</h5>
            </div>
          </div>
          <div className="column1">
            <p className="movie-summary">{movies.movieSummary}</p>
          </div>
          <div>
            <div className="column1">
              <p className="movie-actors">{movies.actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
