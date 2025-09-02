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
  const [movies, setMovies] = useState(moviesArray);
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("")

  useEffect(() => {
    let result = movies;

    if (selectedGenre !== "") {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchTerm !== "") {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(result);
  }, [selectedGenre, searchTerm, movies]);

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newTitle !== "" && newGenre !== "") {
      const newMovie = { title: newTitle, genre: newGenre };
      setMovies([...movies, newMovie]);

    }
    setNewTitle("");
    setNewGenre("")
  };

  return (
    <div className="container py-4">
      <h1 className="mb-3">Movie List</h1>


      <form onSubmit={handleAddMovie} className="mb-3 d-flex gap-2">
        <input
          type="text"
          placeholder="New movie title"
          className="form-control"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New movie genre"
          className="form-control"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>


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


      <input
        type="text"
        placeholder="Search by title..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />


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