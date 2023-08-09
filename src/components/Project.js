import React from 'react';

const Project = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
