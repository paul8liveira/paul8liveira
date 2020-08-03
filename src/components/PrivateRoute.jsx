import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../services/Auth';

const loginPath = '/admin/login';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== loginPath) {
    navigate(loginPath);
    return null;
  }
  return <Component {...rest} />;
};

/* eslint-disable react/forbid-prop-types */
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.any,
};

export default PrivateRoute;
