import React from "react";
import Header from "../header/Header";
import useMovieDetails from "../hooks/useMovieDetails";
import { Card } from "react-bootstrap";

const MovieDetails = ({ selectedMovieId }) => {
  console.log("MovieDetails ID FUNC: ", selectedMovieId);
  const movieDetails = useMovieDetails(selectedMovieId);
  console.log("Movie Details", movieDetails);

  return (
    <section className="mt-4 container">
      <Header />
      <div className="d-flex gap-3 mt-4">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="movieDetail-img"
              src={movieDetails?.Poster}
              alt={movieDetails?.Title}
            />
            <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>{movieDetails?.Title}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="px-3">
          <h2>Movie Details</h2>
          <p>{movieDetails?.Title}</p>
          {movieDetails?.Ratings?.map((rating) => {
            return (
              <p>
                {rating.Source} {rating.Value}
              </p>
            );
          })}
          <div className="">
            <p style={{ maxWidth: 300 }}>{movieDetails?.Plot}</p>
          </div>
          <p>Released in {movieDetails?.Released}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
