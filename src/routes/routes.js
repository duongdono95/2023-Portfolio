import React from 'react';

import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Works from '../pages/Works/Works';
import About from '../pages/About/About';

export const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Skills', component: Skills },
  { path: '/Works', component: Works },
  { path: '/Contact', component: Contact },
];
