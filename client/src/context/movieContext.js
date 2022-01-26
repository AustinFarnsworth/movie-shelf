import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Captain America",
      rating: "5 stars",
      id: "1234",
      movieRating: "PG-13",
      runtime: "2h 52min",
      genre: "Adventure, Drama",
      movieSummary:
        "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      actors: "Chris Evans, Hugo Weaving, Hayley Atwell",
    },
    {
      name: "The Prestige",
      rating: "3 and a half stars",
      id: "1233",
      movieRating: "PG-13",
      runtime: "2h 10m",
      genre: "Drama, Mystery, Thriller",
      movieSummary:
        "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      actors: "Christian Bale, Hugh Jackman, Scarlett Johansson",
    },
    {
      name: "Snitch",
      rating: "3 and a half stars",
      id: "1232",
      movieRating: "PG-13",
      runtime: "1h 52m",
      genre: "Action, Drama, Thriller",
      movieSummary:
        "A father goes undercover for the DEA in order to free his son, who was imprisoned after being set up in a drug deal.",
      actors: "Dwayne Johnson, Susan Sarandon, Jon Bernthal",
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
