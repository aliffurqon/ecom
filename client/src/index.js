//INI PUNYA RINALDI
// import React from "react";
// import ReactDOM from "react-dom";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import App from "./App";

//INI PUNYA ALIF
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  //INI PUNYA RINALDI
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  //INI PUNYA ALIF
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
