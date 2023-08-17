import React from 'react';
import Typewriter from 'typewriter-effect';
import AnimateOnScroll from './AnimateOnScroll';

function Home(){
  return (
    <section className="home" id='home'>
      <div className="bg-animation"></div>
      <AnimateOnScroll>
        <div className="intro">
            <h1 className='firstname'>Sarafa</h1>
            <h1>Abbas</h1>
            <div className='typewriter'>
              <Typewriter
                options={{
                    strings: ["A Frontend web Developer", "Passionate About Web Development"],
                    autoStart: true,
                    loop: true,
                }}
              />
            </div>
            <div className='svgIcon'>
              <a href='/#aboutMe' className='svgLink'>
                <p className='svgText'>Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M21.5459 7.93949C21.2646 7.65828 20.8832 7.50031 20.4854 7.50031C20.0877 7.50031 19.7062 7.65828 19.4249 7.93949L11.9999 15.3645L4.57493 7.93949C4.29202 7.66625 3.91312 7.51506 3.51982 7.51848C3.12653 7.5219 2.75031 7.67965 2.4722 7.95776C2.19409 8.23587 2.03633 8.61209 2.03292 9.00539C2.0295 9.39868 2.18069 9.77759 2.45393 10.0605L10.9394 18.546C11.2207 18.8272 11.6022 18.9852 11.9999 18.9852C12.3977 18.9852 12.7791 18.8272 13.0604 18.546L21.5459 10.0605C21.8271 9.7792 21.9851 9.39773 21.9851 8.99999C21.9851 8.60224 21.8271 8.22078 21.5459 7.93949Z" fill="#F6F6F6"/>
                </svg>
              </a>
            </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Home;