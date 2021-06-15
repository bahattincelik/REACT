import React from "react";
import "../css/Footer.css";
function Footer() {
  const yil = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright ⓒ Bahattin Celik {yil}</p>
    </footer>
  );
}
export default Footer;
