import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/user";
import HeroContainer from "../components/HeroContainer";
import Heading from "../components/Heading";
import HeroForm from "../components/HeroForm";
import Input from "../components/Input";
import Button from "../components/Button";
import Col from "../components/Col";

const mapDispatchToProps = dispatch => ({
  onFetchUser: name => dispatch(fetchUser(name))
});

export default connect(
  null,
  mapDispatchToProps
)(
  class extends Component {
    state = {
      name: ""
    };

    onInputChangeHandler = event => {
      this.setState({ name: event.target.value });
    };

    onSubmitHandler = event => {
      event.preventDefault();
      this.props.onFetchUser(this.state.name);
      this.props.history.push(`/${this.state.name}`);
    };

    render() {
      return (
        <HeroContainer>
          <Heading>Check out your friends on Github!</Heading>
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
);
