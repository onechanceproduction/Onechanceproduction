import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'PHOTOSHOOT',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/photoshoot',
  },
  {
    title: 'BRAND FILMS',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/brand-films',
  },
  {
    title: 'FILMS',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/films',
  },
  {
    title: 'MUSIC VIDEOS',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/music-videos',
  },
];

const ProjectsPage = () => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Where Creativity Meets
      <br></br> Opportunity!</h2>
      <p className="projects-subtext">
      Crafting Your <span className="filmy-text">Unique</span> Story
      </p>
      <hr className='bar'></hr>

      {isAdmin && (
        <div className="admin-actions">
          <button className="upload-btn">Upload New Project</button>
          <button className="delete-btn">Delete Project</button>
        </div>
      )}

      <div className="project-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <h3 className="project-title">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
