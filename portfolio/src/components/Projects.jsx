import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-text">
        <div className="project-item">
          <h3>📸 Instagram Clone</h3>
          <p>A responsive frontend-only Instagram UI built using React.js and CSS.</p>
          <a href="https://sathishinstapro.ccbp.tech" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
          <div className="project-login-info">
    <h4>Login Info:</h4>
    <p>Username: <span className='info'>rahul</span></p>
    <p>Password: <span className='info'>rahul@2021</span></p>
  </div>
        </div>

        <div className="project-item">
          <h3>🔢 Counter App</h3>
          <p>A simple React app that allows users to increment, decrement, and reset a number using useState.</p>
          <a href="https://coding-samurai-internship-task-v93f.vercel.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
        </div>

        <div className="project-item">
          <h3>🌦️ Weather App</h3>
          <p>A weather forecast application built using React.js and OpenWeather API. Includes autocomplete and 7-day forecast.</p>
          <a href="https://coding-samurai-internship-task-yx23.vercel.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
        </div>

        <div className="project-item">
          <h3>🌐 Portfolio Website</h3>
          <p>My personal portfolio built using React.js and normal CSS to showcase skills and projects.</p>
          <a href="#" target="_blank" rel="noreferrer">
            🔗 View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
