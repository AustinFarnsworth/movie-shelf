import "./App.css";
import Topbar from "./ components/topbar";
import MoviesList from "./ components/moviesList";

function App() {
  return (
    <div className="App">
      <Topbar />
      <MoviesList />
    </div>
  );
}

export default App;
