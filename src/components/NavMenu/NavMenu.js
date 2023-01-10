import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

const logo = require('../../assets/logo.svg').default;

const NavMenu = (props) => {
  const { handleClick } = props
  return (
    <div className="nav__menu">
      <div className="logo__container">
        <NavLink to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
      </div>
      {/* --------------------------------- */}
      <ul className="menu__list">
        <NavLink onClick={handleClick} to="Category/About">
          <li className="page__link">About</li>
        </NavLink>
        <NavLink onClick={handleClick} to="Category/Skills">
          <li className="page__link">My Skills</li>
        </NavLink>
        <NavLink onClick={handleClick} to="Category/Projects">
          <li className="page__link">Projects</li>
        </NavLink>
        <NavLink onClick={handleClick} to="Category/Contact">
          <li className="page__link">Contact</li>
        </NavLink>
      </ul>
      {/* --------------------------------- */}
      <div className="social__links">
        <a
          className="social__link"
          href="https://www.linkedin.com/in/duong-dono-a644b8189/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="social__icon__container">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </a>
        <a
          className="social__link"
          href="https://www.facebook.com/thanhduong.bach.50115/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="social__icon__container">
            <i className="fa-brands fa-facebook"></i>
          </div>
        </a>

        <a className="social__link" href="https://www.instagram.com/duongdono225/" rel="noreferrer" target="_blank">
          <div className="social__icon__container">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </a>

        <a className="social__link" href="https://www.behance.net/duongdono" rel="noreferrer" target="_blank">
          <div className="social__icon__container">
            <i className="fa-brands fa-behance"></i>
          </div>
        </a>

        <a className="social__link" href="https://github.com/duongdono95" rel="noreferrer" target="_blank">
          <div className="social__icon__container">
            <i className="fa-brands fa-github"></i>
          </div>
        </a>
      </div>
      {/* --------------------------------- */}
      <div className="text__btns">
        <button>
          <a
            href="https://duongdono2205.files.wordpress.com/2022/10/certificate-diploma.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>My Education</span>
          </a>
        </button>

        <button>
          <a
            href="https://duongdono2205.files.wordpress.com/2022/10/duongdono-resume-2.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>My Resume</span>
          </a>
        </button>
      </div>
      <div className="nav__menu-shadow"></div>
    </div>
  );
};

export default NavMenu;
