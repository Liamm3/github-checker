import React, { Component } from "react";

import HeroContainer from "../components/HeroContainer";
import Heading from "../components/Heading";
import HeroForm from "../components/HeroForm";
import Input from "../components/Input";
import Button from "../components/Button";
import Col from "../components/Col";

export default class extends Component {
  state = {
    name: ""
  };

  onInputChangeHandler = event => {
    this.setState({ name: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <HeroContainer>
        <Heading>Search for your friends on Github!</Heading>
        <HeroForm onSubmit={this.onSubmitHandler}>
          <Col>
            <Input
              value={this.state.name}
              onChange={this.onInputChangeHandler}
              type="text"
            />
          </Col>
          <Col>
            <Button>Search</Button>
          </Col>
        </HeroForm>
      </HeroContainer>
    );
  }
}
