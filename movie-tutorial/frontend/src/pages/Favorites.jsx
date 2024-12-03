import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorite Movies!</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard className="movie-card" movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No favorites movies yet</h2>
        <p>Start adding movies to your favorites!</p>
      </div>
    );
  }
}

export default Favorites;
