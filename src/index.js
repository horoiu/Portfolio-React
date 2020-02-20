import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// Project-wise :
// - file names should be consistent (CamelCase / lowercase)
// - it's better to use english names
// - it's better to structure the project in folders https://reactjs.org/docs/faq-structure.html
// as suggeste by Roland, decide what works better for you