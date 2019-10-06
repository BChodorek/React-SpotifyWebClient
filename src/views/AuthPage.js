import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';
import { Redirect } from 'react-router-dom';

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    if (item) {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

class AuthPage extends Component {
  componentDidMount() {
    const { setToken } = this.props;
    setToken(hash.access_token);
  }

  render() {
    return (
      <>
        <Redirect to="/home" />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(setToken(token)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AuthPage);
