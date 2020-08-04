import React, { useContext } from 'react';
import { auth } from 'gatsby-theme-firebase';
import { Navbar, Image, NavDropdown, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Nav = () => {
  const { isLoggedIn, profile } = useContext(PortfolioContext);

  return (
    <>
      {isLoggedIn ? (
        <Navbar>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title={profile.displayName} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Button
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Desconectar
                </Button>
              </NavDropdown.Item>
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
