import { useState, useEffect } from "react";

const useSearch = (inputData) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const getApiData = async () => {
      const inputDataToLower = inputData.toLowerCase();
      const getDataURL = `https://www.omdbapi.com/?apikey=a93ceeb4&s=${inputDataToLower}`;
      try {
        const response = await fetch(getDataURL);
        const resData = await response.json();
        setMovies(resData.Search);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (inputData) {
      getApiData();
    }
  }, [inputData]);

  return movies;
};

export default useSearch;
