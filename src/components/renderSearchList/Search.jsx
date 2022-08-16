import React, { useState } from "react";
import useSearch from "../hooks/useSearch";
import Header from "../header/Header";
import { Button } from "react-bootstrap";
import RenderCard from "../renderCard/RenderCard";
import RenderForm from "../renderFormInput/RenderForm";

const Search = ({ setSelectedMovieId }) => {
  const [searchInputData, setSearchInputData] = useState("");
  const [inputData, setInputData] = useState("");
  const [contentLoad, setContentLoad] = useState(4);

  const [movies] = useSearch(inputData);

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
      <div className="d-flex flex-wrap">
        {movies &&
          movies.slice(0, contentLoad).map((movie) => {
            return (
              <RenderCard
                key={movie.imdbID}
                movie={movie}
                setSelectedMovieId={setSelectedMovieId}
              />
            );
          })}
      </div>
      <div className="d-flex justify-content-center mt-3 mb-4">
        {inputData && (
          <Button
            className="rounded"
            variant="outline-secondary"
            onClick={() => setContentLoad(contentLoad + 4)}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Search;
