/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from './ProjectCard/ProjectCard';

import './Projects.scss';
const Projects = () => {
  return (
    <div className="projects_container">
      <p className="projects__container__header">
        <strong>SOME</strong> OF MY PROJECTS
      </p>
      <div className="project__labels">
        <div className="project__label">
          <NavLink to="/WebDev">Website Development</NavLink>
        </div>
        <div className="project__label">
          <NavLink to="/UiUx">Ui/Ux Design</NavLink>
        </div>
      </div>
      <div className="project__section">
        <div className="project__preview"></div>

        <div className="projects"></div>
      </div>
    </div>
  );
};

export default Projects;
