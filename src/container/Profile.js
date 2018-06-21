import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading";

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "about repos";
`;

const About = styled.div`
  grid-area: "about";
`;

const Repos = styled.div`
  grid-area: "about";
`;

export default ({ match }) => (
  <Grid>
    <About>
      <Heading>{match.params.name}</Heading>
    </About>
    <Repos>Repos</Repos>
  </Grid>
);
