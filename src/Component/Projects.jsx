import React, { useState, useEffect, useRef } from "react";
import "../CSS/Projects.css";
import { Link } from "react-router-dom";
import { FiTrash2, FiUpload } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "PHOTOSHOOT",
    image: process.env.PUBLIC_URL + "/img/hero-area.jpg",
    link: "/Photoshoot",
  },
  {
    id: 2,
    title: "BRAND FILMS",
    image: process.env.PUBLIC_URL + "/img/hero-area.jpg",
    link: "/BrandFilms",
  },
  {
    id: 3,
    title: "FILMS",
    image: process.env.PUBLIC_URL + "/img/hero-area.jpg",
    link: "/Films",
  },
  {
    id: 4,
    title: "MUSIC VIDEOS",
    image: process.env.PUBLIC_URL + "/img/hero-area.jpg",
    link: "/MusicVideos",
  },
];

const ProjectsPage = () => {
  // const [projects, setProjects] = useState([]);
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [showModal, setShowModal] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const fileInputRef = useRef(null);
  const HandleUpload = (id) => {
    console.log("Upload for", id);
    setCurrentProjectId(id);
    setShowModal(true);
  };

  const handleFileChange = () => {};
  // const HandleDelete = (id) => {
  //   console.log("Delete for", id);
  // }

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'projects'));
  //     const projectList = querySnapshot.docs.map(doc => doc.data());
  //     setProjects(projectList);
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <div className="projects-container">
      <h2 className="projects-heading">
        Where Creativity Meets
        <br></br> Opportunity!
      </h2>
      <p className="projects-subtext">
        Crafting Your <span className="filmy-text">Unique</span> Story
      </p>
      <hr className="bar"></hr>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Show Upload Icon only for admin */}
            {isAdmin && (
              <div className="admin-actions">
                <FiUpload
                  className="icon upload-icon"
                  onClick={() => HandleUpload(project.id)}
                />
              </div>
            )}

            {/* Project Link below the Upload Button */}
            <Link to={project.link}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="overlay">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="drop-area">
              <p>📤 Drag and drop here</p>
              <p>Or</p>
              <p>(Max size 50 MB)</p>
              <label htmlFor="file-upload" className="browse-link">
                Browse file
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                style={{ display: "none" }}
                //accept=".xlsx"
              />
              <p className="supported-text">Supported file: .xlsx</p>
            </div>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              {/* <button onClick={(handleFileChange) => console.log("Upload for", currentProjectId)}> */}
              <button onClick={() => handleFileChange()}>
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
