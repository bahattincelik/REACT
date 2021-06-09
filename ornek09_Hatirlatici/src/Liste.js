import React, { isValidElement } from "react";

function Liste({ kisi }) {
  // const { isim, yas, resim } = kisi[0];

  return (
    <div>
      {kisi.map((k) => {
        const { id, isim, resim, yas } = k;
        return (
          <div className="kisi" key={id}>
            <img src={resim} alt="" />
            <div>
              <h4>{isim}</h4>
              <p>{yas}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Liste;
