import React from 'react';
import { navigate } from 'gatsby';
import { Container } from 'react-bootstrap';
import { SocialLogins, useAuth } from 'gatsby-theme-firebase';

const Login = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    navigate('/admin/blog');
    return null;
  }

  const checkIfCanAuthenticate = () => {
    // TODO: validar somente meu user
    navigate('/admin/blog');
  };

  return (
    <Container className="mt-5">
      <SocialLogins
        style={{ width: '300px' }}
        onSuccess={() => {
          checkIfCanAuthenticate();
        }}
      />
    </Container>
  );
};

export default Login;
