import React, {useState} from "react";
import "./movieCard.css";

const MovieCard = ({name, rating}) => {
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
          <h1>Captain America</h1>
          <ul className="movie-desc">
            <li>PG-13</li>
            <li>2h 52min</li>
            <li>Adventure, Drama</li>
          </ul>
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
