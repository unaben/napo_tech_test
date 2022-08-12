import React, { useState } from "react";
import useSearch from "../hooks/useSearch";
import Header from "../header/Header";
import { Button } from "react-bootstrap";
import RenderCard from "../renderCard/RenderCard";
import RenderForm from "../renderForm/RenderForm";

const Search = ({ setSelectedMovieId }) => {
  const [searchOption, setSearchOption] = useState("");
  const [enteredOption, setEnteredOption] = useState("");
  const [paginate, setPaginate] = useState(4);

  const [movies] = useSearch(enteredOption);

  return (
    <div className="container">
      <Header />
      <div className="my-3">
        <RenderForm
          setSearchOption={setSearchOption}
          setEnteredOption={setEnteredOption}
          searchOption={searchOption}
        />
      </div>
      <div className="d-flex flex-wrap">
        {movies &&
          movies.slice(0, paginate).map((movie) => {
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
        {enteredOption && (
          <Button
            className="rounded"
            variant="outline-secondary"
            onClick={() => setPaginate(paginate + 4)}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Search;
