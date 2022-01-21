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
    </div>
  );
};

// <h4>{name}</h4>;
// {
//   /* <h4>{price}</h4> */
// }

export default MovieCard;
