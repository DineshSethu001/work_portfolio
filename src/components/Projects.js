// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Todo List App',
      description: 'A simple app to manage daily tasks using React and localStorage.',
      link: 'https://github.com/username/todo-app'
    },
    {
      title: 'Weather App',
      description: 'A React app that fetches real-time weather data from an API.',
      link: 'https://github.com/username/weather-app'
    },
    {
      title: 'Personal Blog',
      description: 'A minimal blog site built with React and styled-components.',
      link: 'https://github.com/username/blog-app'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
