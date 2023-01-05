import React from 'react';
import Cloud from '../../components/Clouds/Cloud';
import './About.scss';

const About = () => {
  return (
    <>
      <div className="about__container">
        <div className="about__clouds">
          <div className="big__cloud">
            <Cloud sun={true} scale={1} />
          </div>
          <div className="small__cloud1">
            <Cloud sun={false} scale={0.7} />
          </div>
          <div className="small__cloud2">
            <Cloud sun={false} scale={0.5} />
          </div>
        </div>
        <div className="about__item">
          <h1>ABOUT DONO?</h1>
          <p align="justify">
            Hi there, I am Dono/ a Front-end Developer located in Auckland, New Zealand. I have a passion for UI Design/
            effects and Creating intuitive, dynamic User Experience. Although my ultimate goal is to be a comprehensive
            full-stack developer, my main specialization is Front-End. I believe that only a combination of professional
            code and moderm design can deliver a great user experience . Coding and Designing are not only my job, they
            are also my passion. To get deeper into the industry, i set myself new challenges day by day. i consider
            myself as a well-organized person, problem solver and an independent employer. Aside from hat, i love gym
            and outdoor activities. Some people do say that I'm good at drawing.
          </p>
          <h1>MISSION STATEMENT</h1>
          <p>
            <b>Your code is only as good as its weakest part. </b>This is my main principle and motto. I care primarily
            about the quality of the code. My ambition is to create original, atypical and challenging projects. Tried
            and conventional ideas are out of my interest. I would like to work with professionals to exchange
            experience and learn all the time.
          </p>
          <a href="/contact">Let's make something Special</a>
        </div>
      </div>
    </>
  );
};

export default About;
