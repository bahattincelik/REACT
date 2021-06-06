import React from "react";
import "./Header.css";
import logo from "../img/calculator.png";
function Header() {
  return (
    <div>
      <div className="h1-div">
        <h1>
          <img className="resim" src={logo} alt="" /> ARMSTRONG SAYISINI BUL
        </h1>
      </div>
    </div>
  );
}

export default Header;
