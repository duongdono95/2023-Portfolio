/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectDetails from './ProjectDetails/ProjectDetails';
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
        <NavLink to="WebDev">
          <div className="project__animated__bg"></div>
          <div className="project__label">Website Development</div>
        </NavLink>
        <NavLink to="UiUx">
          <div className="project__animated__bg"></div>
          <div className="project__label">Ui/Ux Design</div>
        </NavLink>
      </div>
      <Routes>
        {projects.map((route, index) => {
          const data = route.data;
          return <Route key={index} path={route.path} element={<ProjectDetails data={data} />} />;
        })}
      </Routes>
    </div>
  );
};

export default Projects;
