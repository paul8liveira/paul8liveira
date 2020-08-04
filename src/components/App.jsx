import React, { useState, useEffect } from 'react';
import { useAuth } from 'gatsby-theme-firebase';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import Nav from './Navbar/Navbar';
import Me from './Me/Me';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { meData, aboutData, footerData } from '../mock/data';

function App() {
  const [me, setMe] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});
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

    setMe({ ...meData });
    setAbout({ ...aboutData });
    repos.then((r) => setProjects([...r]));
    setFooter({ ...footerData });
  }, []);

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
}

export default App;
