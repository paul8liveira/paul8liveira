import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { useAuth } from 'gatsby-theme-firebase';

const loginPath = '/admin/login';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoading, isLoggedIn } = useAuth();

  // não segue enquanto a inscrição no evento useAuth não for executada
  if (isLoading) {
    return null;
  }

  if (!isLoggedIn && location.pathname !== loginPath) {
    navigate(loginPath);
    return null;
  }
  return <Component {...rest} />;
};

/* eslint-disable react/forbid-prop-types */
PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any,
};

export default PrivateRoute;
