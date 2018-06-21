import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { fetchUser } from "../actions/user";
import Heading from "../components/Heading";

const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.user.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchUser: name => dispatch(fetchUser(name))
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    componentDidMount() {
      if (!this.props.user) {
        this.props.onFetchUser(this.props.match.params.name);
        console.log(this.props.user);
      }
    }

    render() {
      return (
        <Grid>
          <About>
            <Heading>{this.props.match.params.name}</Heading>
          </About>
          <Repos>Repos</Repos>
        </Grid>
      );
    }
  }
);
