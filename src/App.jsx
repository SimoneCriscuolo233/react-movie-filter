import { useState, useEffect } from 'react';
function App() {
  const moviesData = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  return (
    <div className="container py-4">
      <h1 className="mb-3">Movie List</h1>

      <select className="form-select mb-3">
        <option value="">All</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul className="list-group">
        {moviesData.map((movie, index) => (
          <li key={index} className="list-group-item">
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

