import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RenderCard = (props) => {
  const { movie, setSelectedMovieId } = props;

  const [imgSrc, setImgSrc] = useState("");

  let navigate = useNavigate();

  const fallBackImageUrl =
    "http://www.dunstableroadrunners.org/wp-content/uploads/2019/04/image-coming-soon.jpg";

  const replaceBrokenImage = (event) => {
    event.currentTarget.src = imgSrc;
  };

  useEffect(() => {
    setImgSrc(fallBackImageUrl);
  }, []);
  return (
    <div className="m-2">
      <Card style={{ width: "18rem" }} >
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          onError={replaceBrokenImage}
          onClick={() => {
            setSelectedMovieId(movie.imdbID);
            navigate("/details");
          }}
        />
        <Card.Body>
          <Card.Title>Movie Title</Card.Title>
          <Card.Text>{movie.Title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RenderCard;
