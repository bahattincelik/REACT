import React from "react";
// * EVENTS (Olaylar) Javascriptteki benzer olarak camelCase ile kullanilirlar.
// ! Event fonksiyonu yazilirken dikkat edilmelidir. Fonksiyon referans olarak
// ! gonderilmelidir. Ornegin:  onClick={handleTikla}
// * Eger onClick={handleTikla()} seklinde yazilirsa sayfa her render edildiginde dogrudan calismis olur.
// ? Peki parametreli bir fonksiyon ise ne yapmak gerekir.
// ? Parametreli fonksiyonlar bir baska isimsiz fonksiyon ile cagrilmalidir.

function Events() {
  let baslik = "OLAYLAR";
  function handleTikla() {
    console.log("Tikla butonuna tiklandi");
  }
  function handleYaz(isim) {
    console.log("Ben " + isim);
  }
  return (
    <div>
      <h1>{baslik}</h1>
      <button onClick={handleTikla}>Tikla</button>
      <button onClick={() => console.log("Sil butonuna tiklandi")}>Sil</button>
      <button onClick={() => handleYaz("Ahmet")}>Yaz </button>
    </div>
  );
}

export default Events;
