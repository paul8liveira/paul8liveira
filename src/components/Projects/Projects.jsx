import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Card, CardColumns, Badge } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <div className="project-wrapper">
        <Container>
          <Title title="Projetos no github" />
          <CardColumns>
            {projects.map((project) => {
              const {
                name,
                description,
                htmlUrl,
                id,
                createdAt,
                languages,
                forkBagdeText,
                forkBadgeVariant,
              } = project;

              return (
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                  key={id}
                >
                  <Card>
                    <Card.Body>
                      <Card.Title className="project-wrapper__text-title">{name}</Card.Title>
                      <Card.Text className="project-wrapper__text">
                        {description}
                        <br />
                        {languages.keys.map((l) => (
                          <Badge className="mr-1" variant="secondary" key={`${languages.key}_${l}`}>
                            {l}
                          </Badge>
                        ))}
                        <Badge variant={forkBadgeVariant}>{forkBagdeText}</Badge>
                      </Card.Text>
                      <br />

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--me"
                        href={htmlUrl}
                      >
                        Ver projeto no github
                      </a>
                    </Card.Body>
                    <Card.Footer>Criado em: {createdAt}</Card.Footer>
                  </Card>
                </Fade>
              );
            })}
          </CardColumns>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
