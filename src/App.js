import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Hero from "./container/Hero";

const App = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default () => (
  <App>
    <Navbar />
    <Hero />
  </App>
);
