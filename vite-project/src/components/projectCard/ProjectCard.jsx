import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
