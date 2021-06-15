import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import data from "../data/kursData";

function Kart(props) {
  console.log(props);
  const { text, name, img } = data[props.isim];

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="info">SENDE DENE!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <header
        class="container  banner
        bg-success bg-gradient
        text-center text-light
        p-4
        "
      >
        <h1>INTERVIEW SORULARI</h1>
      </header>

      <Container className="text-center mt-2 ">
        <Row className="d-flex justify-content-center">
          <Col
            className="mb-3 d-flex justify-content-center"
            xs={12}
            md={6}
            lg={4}
          >
            <Kart isim="0" />
          </Col>
          <Col
            className="mb-3 d-flex justify-content-center"
            xs={12}
            md={6}
            lg={4}
          >
            <Kart isim="1" />
          </Col>
          <Col
            className="mb-3 d-flex justify-content-center"
            xs={12}
            md={6}
            lg={4}
          >
            <Kart isim="2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
