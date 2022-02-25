import "./App.css";
import Topbar from "./ components/topbar";
import MoviesList from "./ components/moviesList";
import {MovieProvider} from "./context/movieContext";
import {useState} from "react";
import AddMovie from "./ components/addMovie";
import movieDatabase from "./api/movieDatabase";

function App() {
  const [movie, setMovie] = useState("");

  const getMovie = () => {
    movieDatabase.get("/601").then((response) => {
      // console.log(response.data);
      setMovie(response.data.title);
    });
  };

  return (
    <MovieProvider>
      <div className="App">
        <Topbar />
        <AddMovie />
        <button onClick={getMovie}>Get Movies</button>
        <p>{movie}</p>
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
