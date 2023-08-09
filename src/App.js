import React from 'react';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Home from './components/Home';
import Testimonial from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
      </header>
      <main>
        <Portfolio />
        <section className="testimonial">
          <Testimonial />
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
