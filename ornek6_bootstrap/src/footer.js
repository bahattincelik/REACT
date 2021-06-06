import React from "react";
import { Navbar } from "react-bootstrap";
function footer() {
  return (
    <div>
      <Navbar fixed="bottom" className="justify-content-center bg-dark p-3  ">
        <p className="text-light">Copyright 2021</p>
      </Navbar>
    </div>
  );
}

export default footer;
