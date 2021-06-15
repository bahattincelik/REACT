import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/BC.png";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="light" variant="light" expand="lg">
        <Link to="/">
          <img width="80" src={logo} alt="" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/armstrong" className="nav-link">
              Armstrong
            </Link>
            <Link to="/stringTers" className="nav-link">
              String-Ters
            </Link>
            <Link to="/bekleniyor" className="nav-link">
              Bekleniyor
            </Link>
            <Link to="/iletisim" className="nav-link">
              Iletisim
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
