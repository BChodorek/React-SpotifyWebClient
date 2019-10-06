import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRoute } from '../authConfig';

const LoginPage = ({ token }) => {
  return (
    <>
      {!token && <a href={loginRoute}>Login with Spotify</a>}
      {token && <Redirect to="/home" />}
    </>
  );
};

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(mapStateToProps)(LoginPage);
