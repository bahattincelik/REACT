import React from "react";
import "./Header.css";
import logo from "../img/calculator.png";
import { Container } from "react-bootstrap";
function Header() {
  return (
    <Container
      fluid
      className="container-fluid
        banner
        bg-success bg-gradient
        text-center text-light
        p-5
        mb-5"
    >
      <h1>
        <img className="resim" src={logo} alt="" /> ARMSTRONG SAYISINI BUL
      </h1>
    </Container>
  );
}

export default Header;
