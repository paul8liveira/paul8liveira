import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Me = () => {
  const { me } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = me;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="me" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="me-title">
            {title} <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="me-cta">
            <span className="cta-btn cta-btn--me">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Me;
