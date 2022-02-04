import React, {useState, useContext} from "react";
import {MovieContext} from "../context/movieContext";
import "./movieCard.css";

const MovieCard = (props) => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="card-container">
      <div className="movie">
        <img
          className="movie-img"
          src="../images/movietheatre.jpg"
          alt="movie"
        />
      </div>
      <div className="movie-text">
        <div className="column1">
          <h1>{props.title}</h1>
          <ul className="movie-desc">
            <li>{movies.movieRating}</li>
            <li>2h 52min</li>
            <li>Adventure, Drama</li>
          </ul>
        </div>
        <br />
        <div className="summary-row">
          <div className="colum2">
            <h5>Summary</h5>
          </div>
          {/* <div className="column2">
          <div>Movie Likes</div>
        </div> */}
        </div>
        <div className="column1">
          <p className="movie-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <div className="column1">
            <p className="movie-actors">
              Chris Evans, Hugo Weaving, Hayley Atwell
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// <h4>{name}</h4>;
// {
//   /* <h4>{price}</h4> */
// }

export default MovieCard;
