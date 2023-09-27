import React, { useEffect, useState } from 'react';
import Project from './Project';
import ProjectData from './ProjectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Dna } from  'react-loader-spinner'

function Portfolio(){
  const [isHovered, setIsHovered] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProjects(ProjectData)
      setLoading(false)
    }, 5000)
  }, []);

  const projectsEl = projects.map(item => {
    return (
      <Project
        key={item.id}
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
        <h1>Portfolio</h1>
        <div className="projects">
          {loading ? (
            <div className='loader'>
              <Dna
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="dna-loading"
                  wrapperClass="dna-wrapper"
              />
              <h3>Loading, Please wait...</h3>
            </div>
          ) : projectsEl}
        </div>
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