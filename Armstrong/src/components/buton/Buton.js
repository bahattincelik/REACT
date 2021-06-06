import React from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import "./Buton.css";
function Buton() {
  return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Sayinizi Giriniz:
            </InputGroup.Text>
            <FormControl
              placeholder=""
              aria-label="Number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>

        <Card.Body>
          <div className="text-div">
            {" "}
            <Card.Title>Armstrong sayi nedir?</Card.Title>
            <Card.Text>
              Tüm basamaklarındaki rakamların sayı değerlerinin küpleri toplamı,
              kendisine eşit olan sayılara "Armstrong sayı" denir.
            </Card.Text>
          </div>
          <div className="buton-div">
            <Button variant="primary">Sayinizi test edin</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Buton;
