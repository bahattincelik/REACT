import React, { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import "./Main.css";
function Main() {
  const [sayi, setSayi] = useState("");

  function sayiBul(event) {
    setSayi(event.target.value);
    console.log(sayi);
  }

  return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <div>
          <InputGroup className=" mb-3">
            <InputGroup.Text id="basic-addon1">
              Sayinizi Giriniz:
            </InputGroup.Text>
            <FormControl
              className="sayi"
              placeholder=""
              aria-label="Number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>

        <Card.Body>
          <div className="text-div">
            <Card.Title>Armstrong sayi nedir?</Card.Title>
            <Card.Text>
              Tüm basamaklarındaki rakamların sayı değerlerinin küpleri toplamı,
              kendisine eşit olan sayılara "Armstrong sayı" denir.
            </Card.Text>
          </div>
          <div className="buton-div">
            <Button onClick={() => sayiBul()} variant="primary">
              Sayinizi test edin
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Main;
