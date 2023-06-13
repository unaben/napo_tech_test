import React, { useState } from "react";
import useSearch from "../hooks/useSearch";
import Header from "./Header";
import { Button } from "react-bootstrap";
import RenderCard from "./RenderCard";
import RenderForm from "./RenderForm";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searchInputData, setSearchInputData] = useState("");
  const [inputData, setInputData] = useState("");
  const [contentLoad, setContentLoad] = useState(4);

  const movies = useSearch(inputData);

  return (
    <div className="container">
      <Header />
      <div className="my-3">
        <RenderForm
          setSearchInputData={setSearchInputData}
          setInputData={setInputData}
          searchInputData={searchInputData}
        />
      </div>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {movies &&
          movies.slice(0, contentLoad).map((movie) => {
            return <RenderCard key={movie.imdbID} movie={movie} />;
          })}
      </div>
      <div className="d-flex justify-content-center mt-3 mb-4">
        {inputData && (
          <Button
            startIcon={<SearchIcon />}
            className="rounded btn btn-secondary btn-lg"
            // variant="outline-secondary"
            onClick={() => setContentLoad((currValue) => currValue + 4)}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Search;
