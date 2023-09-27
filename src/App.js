import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faMedium
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="description"
          content="Sabb portfolio website"
        />
        <meta name="og:title" content="Abbas Portfolio website" />
        <meta name="og:description" content="A portfolio website to showcase my skills as a Frontend Developer" />
        <meta property='og:image' content='https://i.imgur.com/OcHCNPi.png' />
      </Helmet>
      <header className="App-header">
        <Nav />
        <Home />
      </header>
      <main>
        <AboutMe />
        <WhatIDo />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <footer>
        <div className='footerInner'>
          <div className='socials'>
            <ul>
              <li>
                <a href='https://github.com/sabbCodes' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/0lanrewajuAbbas' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a href='https://wa.link/07dbz2' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/abbas-sarafa-a76500244/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li>
                <a href='https://web.facebook.com/abbas.sarafa.5/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href='mailto:sarafaabbas@gmail.com' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </li>
              <li>
                <a href='https://medium.com/@sarafaabbas' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faMedium} size="lg" />
                </a>
              </li>
            </ul>
          </div>
          <p>&copy; {new Date().getFullYear()} Sarafa Abbas</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
