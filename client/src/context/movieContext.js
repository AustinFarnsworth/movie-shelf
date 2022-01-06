import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
// props.children is going to render all of the child components of what
// the movie provider is wrapped around
