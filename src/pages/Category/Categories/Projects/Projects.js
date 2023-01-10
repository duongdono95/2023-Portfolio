import React from 'react';
import ProjectCard from './ProjectCard';
import uiux1 from '../../../../assets/uiux1.png';
import uiux2 from '../../../../assets/uiux2.png';
import uiux3 from '../../../../assets/uiux3.png';
import uiux4 from '../../../../assets/uiux4.png';

import web1 from '../../../../assets/web1.png';
import web2 from '../../../../assets/web2.png';
import web3 from '../../../../assets/web3.png';

import './Projects.scss';
const Projects = () => {
  const html = <i class="fa-brands fa-html5"></i>
  const css = <i class="fa-brands fa-css3-alt"></i>
  const js = <i class="fa-brands fa-square-js"></i>
  const vuejs = <i class="fa-brands fa-vuejs"></i>
  const react = <i class="fa-brands fa-react"></i>
  const typescript = <p>TS</p>
  const mongodb = <span>MongoDB</span>
  const postman = <span>Postman</span>

  const webDesignProjects = [
    {
      title: 'Kognify',
      description: 'NewZealand Travel Agent Website',
      imgUrl: web1,
      processDeck: 'https://duongdono2205.files.wordpress.com/2022/10/1-merged.pdf',
      github: 'https://github.com/duongdono95/kognifi.git',
      site: 'https://kognify.netlify.app/',
      programmes: [html, css, js]
    },
    {
      title: 'MHK',
      description: 'C2C Commercial Website ',
      imgUrl: web2,
      processDeck: 'https://duongdono2205.files.wordpress.com/2022/10/documentation.pdf',
      github: 'https://github.com/duongdono95/mhk.git',
      site: '/',
      programmes: [vuejs, html, css, mongodb]
    },
    {
      title: 'Tiktok',
      description: 'Clone Entertainment platform Website',
      imgUrl: web3,
      processDeck: '/',
      github: '/',
      programmes: [react, html, css, postman]
    },
  ];
  const uiUxDesignProjects = [
    {
      title: 'HiddenGems',
      description: 'Travel Application',
      imgUrl: uiux1,
      link: 'https://www.behance.net/gallery/149574817/HiddenGems',
    },
    {
      title: 'Summoner Wars Univers',
      description: 'Database Website for Mobile Game',
      imgUrl: uiux2,
      link: 'https://www.behance.net/gallery/149574817/HiddenGems',
    },
    {
      title: 'Smart Home',
      description: 'Central Hub Application',
      imgUrl: uiux3,
      link: 'https://www.behance.net/gallery/134572707/Shome-Application',
    },
    {
      title: 'Civic',
      description: 'Ticket Booking Application',
      imgUrl: uiux4,
      link: 'https://www.behance.net/gallery/142564905/Civic-Cinema-App',
    },
  ];
  return (
    <div className="projects_container">
      <p className="projects__container__header">
        <strong>SOME</strong> OF MY PROJECTS
      </p>
      <div className="projects">
        {webDesignProjects.map((project, index) => {
          const { title, description, imgUrl, link, programmes } = project;
          return <ProjectCard key={index} programmes={programmes} title={title} description={description} imgUrl={imgUrl} link={link} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
