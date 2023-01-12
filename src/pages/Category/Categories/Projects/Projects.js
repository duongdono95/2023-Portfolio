/* eslint-disable no-undef */
import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import uiux1 from '../../../../assets/uiux1.png';
import uiux2 from '../../../../assets/uiux2.png';
import uiux3 from '../../../../assets/uiux3.png';
import uiux4 from '../../../../assets/uiux4.png';

import web1 from '../../../../assets/web1.png';
import web2 from '../../../../assets/web2.png';
import web3 from '../../../../assets/web3.png';

import './Projects.scss';
const Projects = () => {
  const html = <i className="fa-brands fa-html5"></i>;
  const css = <i className="fa-brands fa-css3-alt"></i>;
  const js = <i className="fa-brands fa-square-js"></i>;
  const vuejs = <i className="fa-brands fa-vuejs"></i>;
  const react = <i className="fa-brands fa-react"></i>;
  const typescript = <p>TS</p>;
  const mongodb = <span>MongoDB</span>;
  const postman = <span>Postman</span>;

  const webDesignProjects = [
    {
      title: 'Kognify',
      description: 'NewZealand Travel Agent Website',
      imgUrl: web1,
      processDeck: 'https://duongdono2205.files.wordpress.com/2022/10/1-merged.pdf',
      github: 'https://github.com/duongdono95/kognifi.git',
      site: 'https://kognify.netlify.app/',
      programmes: [html, css, js],
    },
    {
      title: 'MHK',
      description: 'C2C Commercial Website ',
      imgUrl: web2,
      processDeck: 'https://duongdono2205.files.wordpress.com/2022/10/documentation.pdf',
      github: 'https://github.com/duongdono95/mhk.git',
      site: '/',
      programmes: [vuejs, html, css, mongodb],
    },
    {
      title: 'Tiktok',
      description: 'Clone Entertainment platform Website',
      imgUrl: web3,
      processDeck: '/',
      github: '/',
      programmes: [react, html, css, postman],
    },
  ];
  const uiUxDesignProjects = [
    {
      title: 'HiddenGems',
      description: 'Travel Application',
      imgUrl: uiux1,
      processDeck: 'https://www.behance.net/gallery/149574817/HiddenGems',
    },
    {
      title: 'Summoner Wars Univers',
      description: 'Database Website for Mobile Game',
      imgUrl: uiux2,
      processDeck: 'https://www.behance.net/gallery/149574817/HiddenGems',
    },
    {
      title: 'Smart Home',
      description: 'Central Hub Application',
      imgUrl: uiux3,
      processDeck: 'https://www.behance.net/gallery/134572707/Shome-Application',
    },
    {
      title: 'Civic',
      description: 'Ticket Booking Application',
      imgUrl: uiux4,
      processDeck: 'https://www.behance.net/gallery/142564905/Civic-Cinema-App',
    },
  ];

  const projectCategories = ['Web Development', 'UI/UX Design'];

  // const [category, setCategory] = useState(1);
  return (
    <div className="projects_container">
      <p className="projects__container__header">
        <strong>SOME</strong> OF MY PROJECTS
      </p>
      <div className="projects__layout">
        <div className="project__types">
          {projectCategories.map((category, index) => {
            return (
              <div key={index} className="project__type">
                <p>{category}</p>
                <div className="project__underline"></div>
              </div>
            );
          })}
        </div>

        <div className="projects">
          {webDesignProjects.map((project, index) => {
            const { title, description, imgUrl, processDeck, programmes, github, site } = project;
            return (
              <ProjectCard
                key={index}
                processDeck={processDeck}
                programmes={programmes}
                title={title}
                description={description}
                imgUrl={imgUrl}
                github={github}
                site={site}
              />
            );
          })}
        </div>
        <div className="projects">
          {uiUxDesignProjects.map((project, index) => {
            const { title, description, imgUrl, processDeck, github, site, programmes } = project;
            return (
              <ProjectCard
                key={index}
                processDeck={processDeck}
                site={site}
                github={github}
                programmes={programmes}
                title={title}
                description={description}
                imgUrl={imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
