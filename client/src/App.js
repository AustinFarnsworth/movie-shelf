import "./App.css";
import Topbar from "./ components/topbar";
import MoviesList from "./ components/moviesList";
import {MovieProvider} from "./context/movieContext";
import AddMovie from "./ components/addMovie";

function App() {
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
