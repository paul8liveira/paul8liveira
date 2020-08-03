import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Página não encontrada</title>
        <html lang={lang} />
        <meta name="description" content="Página não encontrada" />
      </Helmet>
      <section id="me" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="me-title text-center">
              Desculpe, essa página não existe...{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="me-cta justify-content-center">
              <Link className="cta-btn cta-btn--me" to="/">
                Voltar para página inicial
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
