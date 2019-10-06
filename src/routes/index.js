import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const allRoutes = {
  home: '/home',
  login: '/login',
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (rest.token ? <Component {...props} /> : <Redirect to={allRoutes.login} />)}
    />
  );
};
const mapStateToProps = ({ token }) => ({
  token,
});
export default connect(mapStateToProps)(ProtectedRoute);

// (token ? )
