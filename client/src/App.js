import "./App.css";
import Topbar from "./ components/topbar";
import MoviesList from "./ components/moviesList";
import {MovieProvider} from "./context/movieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Topbar />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
