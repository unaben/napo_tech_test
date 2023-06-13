import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RenderCard = ({ movie }) => {
  const [imgSrc, setImgSrc] = useState("");
  const navigate = useNavigate();

  const replaceBrokenImage = (e) => {
    e.currentTarget.src = imgSrc;
  };

  useEffect(() => {
    const fallBackImage = "/public/images/image-coming-soon.jpg";
    setImgSrc(fallBackImage);
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem", cursor: "pointer" }}>
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          onError={replaceBrokenImage}
          onClick={() => {
            navigate(`/details/${movie.imdbID}`);
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
