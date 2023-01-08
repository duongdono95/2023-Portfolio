import React from 'react';
import './Skills.scss';

const Skills = () => {
  return (
    <div className="skills_container">
      <h1>Skills & Experience</h1>
      <div className="skills_content">
        <div className="skills__content-item">
          <div className="skills">
            <div className="skill-box">
              <span className="title">front-end</span>
              <div className="skill-bar">
                <span className="skill-per front-end">
                  <span className="percent">90%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Back-end</span>
              <div className="skill-bar">
                <span className="skill-per back-end">
                  <span className="percent">75%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">UX/UI Deisng</span>
              <div className="skill-bar">
                <span className="skill-per uiux">
                  <span className="percent">70%</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Graphic Design</span>
              <div className="skill-bar">
                <span className="skill-per graphic-design">
                  <span className="percent">60%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content-item">
          <p align="justify">
            Beginning my journey as a Student at Yoobee college in 2021, I have got chances to learn and work on
            different industrial projects from Graphic Design, and Ui-Ux Design to Web/App Development.{' '}
          </p>
          <p align="justify">
            Since I started working as a Front-End developer at Aotearoa Energy, I have had opportunities to work with
            different talented people to create Services and website projects for both business and consumer use. The
            main area of my expertise in most of the projects is front-end development and UX design, HTML, CSS, and JS,
            building small and medium web apps, custom plugins, features, animations, and coding/ designing interactive
            layouts. I also have full-stack development experience with popular open-source CMS like WordPress, and
            document databases like MongoDb.
          </p>
          <p align="justify">Visit my GitHub profile for more details or contact me!!</p>
        </div>
        <ul className="programs"></ul>
      </div>
    </div>
  );
};

export default Skills;
