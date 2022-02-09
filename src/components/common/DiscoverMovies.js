import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTrendMovies, searchMovies } from "../../api/UserService";
import Discover from "../common/Discover";
import Topbar from "../auth/TopBar";

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      searchMovies(searchTerm).then((resp) => {
        setMovies(resp.data.results);
        setSearchTerm("");
      });
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const checkDetail = (id) => {
    console.log(id);
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    getTrendMovies()
      .then((resp) => {
        console.log(resp.data.results);
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log("hata olustu");
      });
  }, []);

  return (
    <div className="movies">
      <Topbar />
      <div className="movieSearch">
        <Card>
          <form className="formCard" onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="text"
              autoFocus="autofocus"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
            <button type="submit">Search</button>
          </form>
        </Card>
      </div>
      <Container>
        <Row>
          {movies.length > 0 &&
            movies.map((item) => (
              <Col className="m-3" onClick={() => checkDetail(item.id)}>
                <Discover key={item.id} {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverMovies;
