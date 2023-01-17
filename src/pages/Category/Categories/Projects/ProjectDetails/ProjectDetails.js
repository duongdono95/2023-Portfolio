import React, { useState } from 'react';
import './ProjectDetails.scss';

const ProjectInfo = (props) => {
  const [previewIndex, setPreviewIndex] = useState(0);
  const [previewProject, setPreviewProject] = useState(props.data[previewIndex]);
  return (
    <div className="project__section">
      <div className="project__preview">
        <div className="flip__card">
          <img src={previewProject.imgUrl} alt={previewProject.title} />
        </div>
      </div>
      <div className="projects">
        {props.data.map((project, index) => {
          const { title, description, imgUrl, processDeck, github, site, programmes } = project;
          return (
            <div key={index} onClick={() => { setPreviewIndex(index) }} className="project">
              <img src={imgUrl} alt={title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
