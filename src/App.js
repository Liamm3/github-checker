import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import HeroContainer from "./components/HeroContainer";
import HeroForm from "./components/HeroForm";
import Input from "./components/Input";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Col from "./components/Col";

const App = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <App>
    <Navbar />
    <HeroContainer>
      <Heading>Search for your friends on Github!</Heading>
      <HeroForm>
        <Col>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Search</Button>
        </Col>
      </HeroForm>
    </HeroContainer>
  </App>
);
