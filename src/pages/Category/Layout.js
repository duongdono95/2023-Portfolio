import React, { useState } from 'react';
import Cloud from '../../Animation/Cloud/Cloud';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { contents } from '../../routes/routes';
import './Layout.scss';

const Content = () => {
  const weather = ['sun', 'thunder', 'snow', 'rainbow'];
  const [index, setIndex] = useState(0);
  return (
    <div className="page__content">
      <div className="animation">
        <div className="big__cloud">
          <Cloud currentWeather={weather[index]} scale={1} />
        </div>
        <div className="med__cloud">
          <Cloud currentWeather={weather[index]} scale={0.7} />
        </div>
        <div className="small__cloud">
          <Cloud currentWeather={weather[index]} scale={0.5} />
        </div>
      </div>
      <div className="categories">
        <Routes>
          {contents.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Content;
