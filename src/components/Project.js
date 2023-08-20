import React from 'react';

function Project(props){
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <img src={require(`../assets/project images/${props.img}`)} alt={props.title} />
      <p>{props.description}</p>
      <div className="project-links">
        {props.isLive &&
          <a
            href={props.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='portfolioLink'
          >
            Live Demo
          </a>
        }
        <a
          href={props.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='portfolioLink'
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Project;