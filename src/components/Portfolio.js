import React, { useState } from 'react';
import Project from './Project';
import ProjectData from './ProjectData';
import AnimateOnScroll from "./AnimateOnScroll";
import uuid from 'react-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio(){
  const [isHovered, setIsHovered] = useState(false)

  const projects = ProjectData.map(item => {
    return (
      <Project
        key={uuid()}
        title={item.title}
        description={item.description}
        img={item.img}
        liveUrl={item.liveUrl}
        githubUrl={item.githubUrl}
        isLive={item.isLive}
      />
    )
  })

  function handleMouseEnter(){
    setIsHovered(true)
  }

  function handleMouseLeave(){
    setIsHovered(false)
  }

  return (
    <section id='portfolio' className="portfolio">
      <div className='portfolioInner'>
        <AnimateOnScroll>
          <h1>Portfolio</h1>
          <div className="projects">
            {projects}
          </div>
        </AnimateOnScroll>
      </div>
      <div
        className='moreProjects'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isHovered ? (
          <a href='https://github.com/sabbCodes' target="_blank" rel='noopener noreferrer'>
            See More Projects
          </a>
        ) : (
          <a href='https://github.com/sabbCodes' target="_blank" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        )}
      </div>
    </section>
  );
};

export default Portfolio;