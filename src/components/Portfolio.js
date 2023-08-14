import React from 'react';
import Project from './Project';
import ProjectData from './ProjectData';
import AnimateOnScroll from "./AnimateOnScroll";

function Portfolio(){
  return (
    <section id='portfolio' className="portfolio">
      <div className='portfolioInner'>
        <AnimateOnScroll>
          <h2>Portfolio</h2>
          <div className="projects">
            {ProjectData.map((project, index) => (
              <AnimateOnScroll>
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Portfolio;
