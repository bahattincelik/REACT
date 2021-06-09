import React, { useState, useEffect } from "react";

function UseEffect01() {
  const [sayac, setSayac] = useState(0);
  useEffect(() => {
    console.log("Merhaba");
  });
  useEffect(() => {
    console.log("Komponent her guncellediginde calisan bir hook");
  }, [sayac]);
  function artttir() {
    setSayac(sayac + 1);
  }
  return (
    <div className="container text-center">
      <h1>SAYAC: {sayac}</h1>
      <button onClick={artttir} className="btn btn-danger">
        ARTTIR
      </button>
    </div>
  );
}

export default UseEffect01;
