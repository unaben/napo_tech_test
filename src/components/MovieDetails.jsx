import React from "react";
import Header from "./Header";
import useMovieDetails from "../hooks/useMovieDetails";
import { Button, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const movieDetails = useMovieDetails(movieId);

  return (
    <section className="mt-4 container">
      <Header />
      <div className="d-flex mt-4 flex-column">
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <div>
            <Card className="card-container" style={{ width: "22rem" }}>
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
          <div className="px-3 movie-details" style={{ maxWidth: 400 }}>
            <h2>Movie Details</h2>
            <p>{movieDetails?.Title}</p>
            {movieDetails?.Ratings?.map((rating) => {
              return (
                <p>
                  {rating.Source} {rating.Value}
                </p>
              );
            })}
            <div>
              <p style={{ maxWidth: 400 }}>{movieDetails?.Plot}</p>
            </div>
            <p>Released in {movieDetails?.Released}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/">
            <Button className="btn btn-secondary btn-lg mt-4 return-to-search-btn">
              Return to search
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
