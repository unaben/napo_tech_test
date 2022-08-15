import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/searchInput/Search";
import MovieDetails from "./components/movieDetails/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState("");
  return (
    <div className="min-vh-100 min-vw-100">
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Search setSelectedMovieId={setSelectedMovieId} />}
            />
            <Route
              path="/details"
              element={<MovieDetails selectedMovieId={selectedMovieId} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
