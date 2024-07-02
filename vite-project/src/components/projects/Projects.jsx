import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Uzum market',
    description: 'Uzum marketga oxshagan project',
    imageUrl: 'https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg'
  },
  {
    id: 2,
    title: 'Food shop',
    description: 'Food shop projecti',
    imageUrl: 'https://cdn1.vectorstock.com/i/1000x1000/80/10/food-shop-logo-vector-34038010.jpg'
  },
  {
    id: 3,
    title: 'Tabeh project',
    description: 'Art gallery projecti',
    imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-4/6594418516.jpg'
  }

];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
