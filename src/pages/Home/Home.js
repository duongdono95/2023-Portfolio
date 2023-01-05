import React, { useState, useEffect } from 'react';
import CloudsSun from '../../components/Clouds/Cloud';
import './Home.scss';
import TypeWriter2 from '../../Hook/TypeWriter2';
import TypeWriter from '../../Hook/TypeWriter';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="containers">
        <div className="container left">
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="wrapper">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="containers">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="container left">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="line">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<p>{text}</p> '} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'</div>'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="bios">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<h1>Hello</h1> '} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<p>Please be nice to meeee!</p>'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="wrapper">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="wrapper">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line">
            <p>
              <TypeWriter2 renderingText={'<div className="wrapper">'} />
            </p>
          </div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="container right">
          <h1>Hello</h1>
          <div className="bios">
            <p>I AM DONO - 27 YEARS OLD </p>
            <p>A FRONT-END DEVELOPER IN AUCKLAND</p>
            <p>
              I LOVE
              <span>
                <TypeWriter options={['  CODING !', '  DESIGN !', '  GYM !', '  COOKING !']} />
              </span>
            </p>
          </div>
          <div id="flip">
            <div>
              <div>#Front-End Developer</div>
            </div>
            <div>
              <div>#Fullstack Developer</div>
            </div>
            <div>
              <div>#Ui/Ux Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
