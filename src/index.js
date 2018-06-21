import React from "react";
import ReactDOM from "react-dom";
import Typography from "typography";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import userReducer from "./reducers/user";

const typography = new Typography({
  baseFontSize: "18px",
  scaleRatio: 4
});

typography.injectStyles();

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
