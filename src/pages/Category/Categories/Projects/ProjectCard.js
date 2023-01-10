import React from 'react';

const ProjectCard = (props) => {
  const { title, description, imgUrl, link, programmes } = props;
  console.log(programmes);
  return (
    <div className="project__card">
      {/* Think about making flip card animation ------------------------------------------- */}
      <div className="hover__details"></div>
      <div className="main__details">
        <img src={imgUrl} alt="Project Image" />
        <p className="title">{title}</p>
        <div className="programmes">
          {programmes.map((programe) => {
            return <>{programe}</>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
