import React, { useState } from "react";
import "../css/Armstrong.css";
import tamir from "../img/wrench.png";
function String() {
  const [sayi, setSayi] = useState("");
  const [sonuc, setSonuc] = useState("");
  const [renk, setRenk] = useState();

  function sayiDegistir(sayi) {
    if (!sayi) {
      setSonuc("Lutfen bir kelime veya cumle giriniz");
    }

    let birler = sayi % 10;
    let onlar = Math.floor((sayi / 10) % 10);
    let yuzler = Math.floor((sayi / 10 / 10) % 10);

    if (!sayi) {
      setRenk("bg-info");
      setSonuc("Lutfen bir kelime veya cumle giriniz");
    } else if (
      sayi ===
      birler * birler * birler +
        onlar * onlar * onlar +
        yuzler * yuzler * yuzler
    ) {
      setRenk("bg-success");
      setSonuc("Yapim Asamasinda");
    } else {
      setRenk("bg-danger");
      setSonuc("Yapim Asamasinda");
    }
  }

  return (
    <div className="container text-center ">
      <div className="row align-self-center">
        <div className="col ">
          <p className={renk}>{sonuc} </p>
          <input
            onChange={(e) => setSayi(parseInt(e.target.value))}
            type="Text"
            className="m-4"
          />
          <p>
            Kullanıcının girdiği bir dizeyi(stringi) tersine çevirmek için
            kullanilir
          </p>
          <button
            onClick={() => sayiDegistir(sayi)}
            className="btn btn-info m-5"
          >
            Ters Cevir
          </button>
          <img width="100" src={tamir} alt="" />
        </div>
      </div>
    </div>
  );
}

export default String;
