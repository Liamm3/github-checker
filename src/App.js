import React from "react";
import styled from "styled-components";

const App = styled.div`
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #a55eea;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 1rem;
  color: white;

  :hover {
    background-color: #8854d0;
  }
`;

const Main = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  padding: 2.5rem;
  background-color: #eee;
`;

const Input = styled.input``;

const Button = styled.button`
  background-color: green;
  border: transparent;
  padding: 0.25rem 0.5rem;
`;

const Col = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
`;

export default () => (
  <App>
    <header>
      <Nav>
        <NavLink href="/">GitHub Searcher</NavLink>
      </Nav>
    </header>
    <Main>
      <h1>Search for your friends!</h1>
      <Form>
        <Col>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Search</Button>
        </Col>
      </Form>
    </Main>
  </App>
);
