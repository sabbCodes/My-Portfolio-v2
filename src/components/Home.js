import React from 'react';
import Typewriter from 'typewriter-effect';

function Home(){
  return (
    <div className="home">
      <div className="bg-animation"></div>
      <div className="intro">
        <h1>Your Name</h1>
        <Typewriter
          options={{
            strings: ["I'm a Frontend Developer", "Passionate About Web Development"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;