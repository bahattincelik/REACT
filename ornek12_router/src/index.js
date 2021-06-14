// React'ın temel kutuphaneleri
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// App modulunun eklenmesi
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App modulunun cagrilmasi */}
  </React.StrictMode>,
  document.getElementById("root")
);
