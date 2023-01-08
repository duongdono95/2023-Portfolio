import React from 'react';

import Home from '../pages/Home/Home';
import Category from '../pages/Category/Layout';

import Contact from '../pages/Category/Categories/Contact/Contact';
import Skills from '../pages/Category/Categories/Skills/Skills';
import Works from '../pages/Category/Categories/Works/Works';
import About from '../pages/Category/Categories/About/About';

export const routes = [
  { path: '/', component: Home },
  { path: '/Category/*', component: Category },
];
export const contents = [
  { path: '/About', component: About },
  { path: '/Skills', component: Skills },
  { path: '/Works', component: Works },
  { path: '/Contact', component: Contact },
];
