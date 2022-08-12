import { useState, useEffect } from "react";

const useSearch = (enteredOption) => {
  const [movies, setMovies] = useState([]);
  const getApiData = async () => {
    const enterdedOptionToLower = enteredOption.toLowerCase();
    const getDataURL = `https://www.omdbapi.com/?apikey=a93ceeb4&s=${enterdedOptionToLower}`;
    try {
      const response = await fetch(getDataURL);
      const resData = await response.json();
      console.log("resData:", resData.Search);
      setMovies(resData.Search);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (enteredOption) {
      getApiData();
    }
  }, [enteredOption]);

  return [movies];
};

export default useSearch;
