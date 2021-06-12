import React, { useState } from "react";
import "./Main.css";

function Mainyeni() {
  const [sayi, setSayi] = useState("");
  const [sonuc, setSonuc] = useState("");
  const [renk, setRenk] = useState();

  function sayiDegistir(sayi) {
    if (!sayi) {
      setSonuc("Lutfen bir sayi giriniz");
    }

    let birler = sayi % 10;
    let onlar = Math.floor((sayi / 10) % 10);
    let yuzler = Math.floor((sayi / 10 / 10) % 10);

    if (!sayi) {
      setRenk("bg-info");
      setSonuc("Lutfen bir sayi giriniz");
    } else if (
      sayi ===
      birler * birler * birler +
        onlar * onlar * onlar +
        yuzler * yuzler * yuzler
    ) {
      setRenk("bg-success");
      setSonuc("Bu sayi armstrong'dur");
    } else {
      setRenk("bg-danger");
      setSonuc("Bu sayi armstrong degildir");
    }
  }

  return (
    <div className="container text-center ">
      <div className="row align-self-center">
        <div className="col ">
          <p className={renk}>{sonuc} </p>
          <input
            onChange={(e) => setSayi(parseInt(e.target.value))}
            type="Number"
            className="m-4"
          />
          <p>
            Tüm basamaklarındaki rakamların sayı değerlerinin küpleri toplamı,
            kendisine eşit olan sayılara "Armstrong sayı" denir. Ornek: 153, 370
          </p>
          <button onClick={() => sayiDegistir(sayi)} className="btn btn-info">
            Sayi Bul
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mainyeni;
