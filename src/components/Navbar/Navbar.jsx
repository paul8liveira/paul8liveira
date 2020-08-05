import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { auth } from 'gatsby-theme-firebase';
import { Navbar, Image, NavDropdown } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Nav = () => {
  const { isLoggedIn, profile } = useContext(PortfolioContext);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            id
            name
            to
          }
        }
      }
    }
  `);

  const NavLinks = ({ menuLinks }) => {
    const links = menuLinks.map(({ name, to, id }) =>
      id !== 'logout' ? (
        <Link key={id} to={to} className="dropdown-item">
          {name}
        </Link>
      ) : (
        <button
          className="dropdown-item"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.6rem' }}
          key={id}
          type="button"
          onClick={() => {
            auth.signOut();
          }}
        >
          Desconectar
        </button>
      )
    );
    return links;
  };

  return (
    <>
      {isLoggedIn ? (
        <Navbar>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title={profile.displayName} id="basic-nav-dropdown">
              <NavLinks menuLinks={data.site.siteMetadata.menuLinks} />
            </NavDropdown>
            <Navbar.Text>
              <Image src={profile.photoURL} className="profile-picture shadow" roundedCircle />
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      ) : null}
    </>
  );
};

export default Nav;
