import { useState, useEffect } from "react";

const useMovieDetails = (selectedMovieId) => {
  const [moviesDetails, setMoviesDetails] = useState();

  const getMovieDetails = async () => {
    const movieDetailsURL = `https://www.omdbapi.com/?apikey=a93ceeb4&i=${selectedMovieId}`;
    try {
      const response = await fetch(movieDetailsURL);
      const movieData = await response.json();
      setMoviesDetails(movieData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (selectedMovieId) {
      getMovieDetails();
    }
  }, []);

  return moviesDetails;
};

export default useMovieDetails;
