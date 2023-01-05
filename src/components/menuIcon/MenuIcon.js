import React, { useState } from 'react';
import './MenuIcon.scss';


const MenuIcon = (props) => {
  const { showMenuIcon } = props;
  const [open, setOpen] = useState(showMenuIcon);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div onClick={toggleOpen} id="nav-menu-icon" className={open ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuIcon;
