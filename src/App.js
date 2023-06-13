import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="min-vh-100 min-vw-100">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/details/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
