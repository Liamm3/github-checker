import React from "react";
import ReactDOM from "react-dom";
import Typography from "typography";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const typography = new Typography({
  baseFontSize: "18px",
  scaleRatio: 4
});

typography.injectStyles();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
