import React, { useState, useEffect } from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { graphql, StaticQuery } from 'gatsby';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import Nav from './Navbar/Navbar';
import Me from './Me/Me';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

function App() {
  const [projects, setProjects] = useState([]);

  const { isLoggedIn, profile } = useAuth();

  async function getLanguages(url) {
    const response = await fetch(url);
    const langs = await response.json();
    return langs;
  }

  async function getGitHubRepos() {
    const response = await fetch('https://api.github.com/users/paul8liveira/repos');
    const repos = await response.json();

    const mappedRepos = repos.map((m) => ({
      id: m.id,
      name: m.name,
      htmlUrl: m.html_url,
      description: m.description,
      promiseLanguages: getLanguages(m.languages_url),
      stargazersCount: m.stargazers_count,
      watchersCount: m.watchers_count,
      createdAt: format(new Date(m.created_at), 'dd/MM/yyyy HH:mm:ss'),
      forkBadgeVariant: m.fork ? 'warning' : 'primary',
      forkBagdeText: m.fork ? 'Forked' : 'Own',
    }));

    const getLanguagesValues = async () => {
      return Promise.all(mappedRepos.map((m) => m.promiseLanguages));
    };
    const values = await getLanguagesValues();

    return mappedRepos.map((m, i) => {
      const keys = Object.keys(values[i]).map((lang) => lang);
      const languages = { id: nanoid(), keys };
      return { ...m, languages };
    });
  }

  useEffect(() => {
    const repos = getGitHubRepos();
    repos.then((r) => setProjects([...r]));
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              me {
                title
                name
                subtitle
                cta
              }
              about {
                img
                paragraphOne
                paragraphThree
                paragraphTwo
                resume
              }
              footer {
                networks {
                  id
                  name
                  url
                }
              }
            }
          }
        }
      `}
      render={({ site }) => {
        const { me, about, footer } = site.siteMetadata;
        return (
          <PortfolioProvider value={{ me, about, projects, footer, isLoggedIn, profile }}>
            <Nav />
            <Me />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </PortfolioProvider>
        );
      }}
    />
  );
}

export default App;
