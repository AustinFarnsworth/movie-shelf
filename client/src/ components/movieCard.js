import React, {useContext} from "react";
import {MovieContext} from "../context/movieContext";
import "./movieCard.css";

const MovieCard = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div className="card-container">
            <div className="movie" key={movie.id}>
              <img
                className="movie-img"
                src="../images/movietheatre.jpg"
                alt="movie"
              />
            </div>
            <div className="movie-text">
              <div className="column1">
                <h1>{movie.title}</h1>
                <ul className="movie-desc">
                  <li>{movie.movieRating}</li>
                  <li>{movie.runtime}</li>
                  <li>{movie.genre}</li>
                </ul>
              </div>
              <br />
              <div className="summary-row">
                <div className="colum2">
                  <h5>Summary</h5>
                </div>
              </div>
              <div className="column1">
                <p className="movie-summary">{movie.movieSummary}</p>
              </div>
              <div>
                <div className="column1">
                  <p className="movie-actors">{movie.actors}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
