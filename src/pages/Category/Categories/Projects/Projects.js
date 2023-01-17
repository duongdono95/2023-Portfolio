/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '../../../../routes/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Projects.scss';
const Projects = () => {
  return (
    <div className="projects_container">
      <p className="projects__container__header">
        <strong>SOME</strong> OF MY PROJECTS
      </p>
      <div className="project__labels">
        <div className="project__label">
          <NavLink to="WebDev">Website Development</NavLink>
        </div>
        <div className="project__label">
          <NavLink to="UiUx">Ui/Ux Design</NavLink>
        </div>
      </div>
      <div className="project__section">
        <Routes>
          {projects.map((route, index) => {
            const data = route.data;
            return <Route key={index} path={route.path} element={<ProjectCard data={data} />} />;
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Projects;
