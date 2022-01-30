import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiShareCircleFill } from "react-icons/ri";
import logo1 from "../../assets/img/logo1.png";

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alertify.confirm(
      "ÇIKIŞ",
      "ÇIKIŞ yapmak istediginizden eminmisiniz?",
      () => {
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("ÇIKIŞ Yapildi");
      }
    );
  };

  return (
    <div className="menuDiv">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/movie/:movieId">
            {/* <Image src={logo1} />  */}Film Merkezi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aile">
                Populer
              </Nav.Link>
              <Nav.Link as={Link} to="/animasyon">
                Animation
              </Nav.Link>
              <Nav.Link as={Link} to="/komedi">
                Aksiyon
              </Nav.Link>
              <Nav.Link as={Link} to="/dizi">
                Now-Playing
              </Nav.Link>
              <Nav.Link as={Link} to="/aksiyon">
                Aksiyon
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button className="logoutBtn" onClick={handleLogout}>
            <RiShareCircleFill /> &nbsp; ÇIKIŞ
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
