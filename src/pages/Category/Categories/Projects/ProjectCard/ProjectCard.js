import React from 'react';
import './ProjectCard.scss';

const ProjectCard = (props) => {
  const { title, description, imgUrl, processDeck, github, site, programmes } = props.project;
  return <>{/* <img src={imgUrl} alt={title} /> */}</>;
};

export default ProjectCard;
