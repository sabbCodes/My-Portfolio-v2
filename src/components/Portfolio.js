import React from 'react';
import Project from './Project';
import ProjectData from './ProjectData';

function Portfolio(){
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {ProjectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
