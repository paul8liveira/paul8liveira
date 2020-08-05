/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <html lang={data.site.siteMetadata.lang} />
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
