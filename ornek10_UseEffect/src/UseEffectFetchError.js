import React from "react";
import { useState, useEffect } from "react";

function UseEffectFetchError() {
  const [kisiler, setKisiler] = useState([]);
  const [hata, setHata] = useState(false);
  const url = "https://api.github.com/users";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setHata(true);
        }
      })
      .then((data) => setKisiler(data));
  }, []);
  return (
    <div>
      {kisiler.map((kisi) => {
        return (
          <div key={kisi.id}>
            <h2>{kisi.login}</h2>
            <img src={kisi.avatar_url} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectFetchError;
