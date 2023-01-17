import React from 'react';

import Home from '../pages/Home/Home';
import Category from '../pages/Category/Layout';

import Contact from '../pages/Category/Categories/Contact/Contact';
import Skills from '../pages/Category/Categories/Skills/Skills';
import Projects from '../pages/Category/Categories/Projects/Projects';
import About from '../pages/Category/Categories/About/About';

import uiux1 from '../assets/uiux1.png';
import uiux2 from '../assets/uiux2.png';
import uiux3 from '../assets/uiux3.png';
import uiux4 from '../assets/uiux4.png';

import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';

export const routes = [
  { path: '/', component: Home },
  { path: '/Category/*', component: Category },
];
export const contents = [
  { path: '/About', component: About },
  { path: '/Skills', component: Skills },
  { path: '/Projects/*', component: Projects },
  { path: '/Contact', component: Contact },
];
const webDevelopment = [
  {
    title: 'Kognify',
    description: 'NewZealand Travel Agent Website',
    imgUrl: web1,
    processDeck: 'https://duongdono2205.files.wordpress.com/2022/10/1-merged.pdf',
    github: 'https://github.com/duongdono95/kognifi.git',
    site: 'https://kognify.netlify.app/',
    programmes: [
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <i className="fa-brands fa-square-js"></i>,
    ],
  },
  {
    title: 'MHK',
    description: 'C2C Commercial Website ',
    imgUrl: web2,
    processDeck: 'https://duongdono2205.files.wordpress.com/2022/10/documentation.pdf',
    github: 'https://github.com/duongdono95/mhk.git',
    site: '/',
    programmes: [
      <i className="fa-brands fa-vuejs"></i>,
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <span>MongoDB</span>,
    ],
  },
  {
    title: 'Tiktok',
    description: 'Clone Entertainment platform Website',
    imgUrl: web3,
    processDeck: '/',
    github: '/',
    programmes: [
      <i className="fa-brands fa-react"></i>,
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <span>Postman</span>,
    ],
  },
];
const uiUxDesign = [
  {
    title: 'HiddenGems',
    description: 'Travel Application',
    imgUrl: uiux1,
    processDeck: 'https://www.behance.net/gallery/149574817/HiddenGems',
  },
  {
    title: 'Summoner Wars Univers',
    description: 'Database Website for Mobile Game',
    imgUrl: uiux2,
    processDeck: 'https://www.behance.net/gallery/149574817/HiddenGems',
  },
  {
    title: 'Smart Home',
    description: 'Central Hub Application',
    imgUrl: uiux3,
    processDeck: 'https://www.behance.net/gallery/134572707/Shome-Application',
  },
  {
    title: 'Civic',
    description: 'Ticket Booking Application',
    imgUrl: uiux4,
    processDeck: 'https://www.behance.net/gallery/142564905/Civic-Cinema-App',
  },
];

export const projects = [
  {
    path: '/WebDev', data: webDevelopment
  },
  {
    path: '/UiUx', data: uiUxDesign
  },
]

