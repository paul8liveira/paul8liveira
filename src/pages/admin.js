import React from 'react';
import { Helmet } from 'react-helmet';
import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute';
import { headData } from '../mock/data';
import Blog from '../components/Blog/Blog';
import Login from '../components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Admin = () => {
  const { title, lang, description } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Router basepath="/admin">
        <PrivateRoute path="/blog" component={Blog} />
        <PrivateRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Login} />
      </Router>
    </>
  );
};

export default Admin;
