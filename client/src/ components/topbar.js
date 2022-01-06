import React, {useContext} from "react";
import "./topbar.css";
import {MovieContext} from "../context/movieContext";

function Topbar() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="topbar-container">
      <div className="one">Welcome to Movie Shelf</div>
      <div className="two">You have {movies.length} movies on your shelf</div>
    </div>
  );
}

export default Topbar;
