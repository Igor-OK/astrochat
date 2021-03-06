import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginComponent extends Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.user.isFirstLogin) {
      return <Redirect to="/profile" />
    }
    return <Redirect to="/chats" />
  }
}

const stateToProps = (state) => ({
  user: state.user,
});

export const Login = withRouter(connect(stateToProps)(LoginComponent));
