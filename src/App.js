import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./container/Hero";
import Profile from "./container/Profile";

const App = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default () => (
  <App>
    <Navbar />
    <Switch>
      <Route path="/:name" component={Profile} />
      <Route path="/" component={Hero} />
    </Switch>
  </App>
);
