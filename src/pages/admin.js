import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import Blog from '../components/Blog/Blog';
import Login from '../components/Login';
import Layout from '../components/Layout';

const Admin = () => {
  return (
    <Layout>
      <Router basepath="/admin">
        <PrivateRoute path="/blog" component={Blog} />
        <Login path="/login" />
        <Login default />
      </Router>
    </Layout>
  );
};

export default Admin;
