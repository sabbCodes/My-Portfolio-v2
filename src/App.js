import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
      </header>
      <main>
        <AboutMe />
        <WhatIDo />
        <Skills />
        {/* <Experience /> */}
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Sarafa Abbas</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
