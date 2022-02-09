import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getMovieDetail } from "../../api/UserService";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const DiscoverMovieDetay = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetail(movieId).then((resp) => {
      setMovie(resp.data);
      console.log(resp.data);
      console.log(movie.poster_path);
    });
  }, []);

  return (
    <div className="movieDiv">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="divImg">
              <img src={IMG_API + movie.poster_path} alt={movie.title} />
            </div>
          </Col>

          <Col className="coldetails" lg={5}>
            <div className="details">
              <ul>
                <li className="title">
                  <h2>{movie.title}</h2>
                </li>
                <li>{movie.overview}</li>
                <li>Original Name:{movie.with_watch_providers}</li>
                <li>Original Name:{movie.name}</li>
                <li>Original Name:{movie.original_name}</li>
                <li>Backdrop Path: {movie.backdrop_path}</li>
                <li>IMDB Vote: {movie.vote_average}</li>
                <li>Release Date: {movie.release_date}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverMovieDetay;
