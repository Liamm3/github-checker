import React from "react";
import ReactDOM from "react-dom";
import Typography from "typography";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const typography = new Typography({
  baseFontSize: "18px",
  scaleRatio: 4
});

typography.injectStyles();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
