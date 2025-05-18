import React, { useState } from 'react';
import '../CSS/Projects.css';
import { Link } from 'react-router-dom';
import { FiTrash2, FiUpload } from 'react-icons/fi';

const projects = [
  { id: 1,
    title: 'PHOTOSHOOT',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/photoshoot',
  },
  { id:2,
    title: 'BRAND FILMS',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/brand-films',
  },
  { id:3,
    title: 'FILMS',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/films',
  },
  { id:4,
    title: 'MUSIC VIDEOS',
    image: process.env.PUBLIC_URL + '/img/hero-area.jpg',
    link: '/projects/music-videos',
  },
];



const ProjectsPage = () => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const HandleUpload = () => {
    return (
      <></>
    );
  }
  const HandleDelete = () => {
    return (
      <></>
    );
  }
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Where Creativity Meets
      <br></br> Opportunity!</h2>
      <p className="projects-subtext">
      Crafting Your <span className="filmy-text">Unique</span> Story
      </p>
      <hr className='bar'></hr>

      <div className="project-grid">
        {projects.map((project) => (
          <a key={projects.id} href={project.link} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <h3 className="project-title">{project.title}</h3>
            </div>
            {isAdmin && ( 
              <div className="admin-actions">
                <FiUpload
                   className="icon upload-icon"
                    onClick={() => HandleUpload(project.title)}
                 />
                <FiTrash2
                  className="icon trash-icon"
                  onClick={() => HandleDelete(project.title)}
                />
        </div>
             )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
