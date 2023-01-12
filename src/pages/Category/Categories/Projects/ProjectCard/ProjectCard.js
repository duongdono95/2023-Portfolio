import React from 'react';
import './ProjectCard.scss'

const ProjectCard = (props) => {
  const { title, description, imgUrl, processDeck, github, site, programmes } = props;
  return (
    <div className="flip__card">
      {/* Think about making flip card animation ------------------------------------------- */}
      <div className="flip__card-inner">
        <div className="flip__card-front">
          <img src={imgUrl} alt="Project Image" />
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <div className="flip__card-back">
          <p className="title">{title}</p>
          {programmes && (
            <div className="programmes">
              {programmes.map((programe, index) => {
                return <React.Fragment key={index}>{programe}</React.Fragment>;
              })}
            </div>
          )}

          {
            github && (
              <button>
                <a href={github}>Git Hub Repository</a>
              </button>)
          }
          <button>
            <a href={processDeck}>Process Deck</a>
          </button>
          {
            site && (
              <button>
                <a href={site}>Visit The Site</a>
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;