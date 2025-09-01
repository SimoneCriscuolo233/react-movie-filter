import { useState, useEffect } from "react";

const moviesArray = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [movies] = useState(moviesArray);
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectedGenre)
      );
    }
  }, [selectedGenre, movies]);

  return (
    <div className="container py-4">
      <h1 className="mb-3">Movie List</h1>

      <select
        className="form-select mb-3"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul className="list-group">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="list-group-item">
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


