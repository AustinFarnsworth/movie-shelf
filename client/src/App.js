import "./App.css";
import Topbar from "./ components/topbar";
import MoviesList from "./ components/moviesList";
import {MovieProvider} from "./context/movieContext";
import {useEffect, useState} from "react";
import AddMovie from "./ components/addMovie";

function App() {
  const [movie, setMovie] = useState("");

  return (
    <MovieProvider>
      <div className="App">
        <Topbar />
        <AddMovie />

        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
