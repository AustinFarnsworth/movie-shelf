import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Captain America",
      rating: "5 stars",
      id: "1234",
    },
    {
      name: "The Prestige",
      rating: "3 and a half stars",
      id: "1233",
    },
    {
      name: "Snitch",
      rating: "3 and a half stars",
      id: "1232",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
// props.children is going to render all of the child components of what
// the movie provider is wrapped around
