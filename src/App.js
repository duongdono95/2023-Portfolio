import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { routes } from './routes/routes';
import MenuIcon from './components/menuIcon/MenuIcon';
import Media from 'react-media';
import NavMenu from './components/NavMenu/NavMenu';
function App() {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const clickedItem = () => {
    setShowMenuIcon(!showMenuIcon)
  }
  return (
    <div className="App">
      <Router>
        <Media queries={{ large: { minWidth: 1300 } }}>
          {(matches) =>
            matches.large ? (
              <>
                <div className="nav__menu__container small-screen">
                  <NavMenu handleClick={clickedItem} />
                </div>
                <div className="content__container padding">
                  <Routes>
                    {routes.map((route, index) => {
                      const Page = route.component;
                      return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                  </Routes>

                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    setShowMenuIcon(!showMenuIcon);
                  }}
                  className="menu__icon__container"
                >
                  <MenuIcon handleClick={clickedItem} showMenuIcon={showMenuIcon} />
                </div>
                {showMenuIcon ? (
                  <div className="nav__menu__container ">
                    <NavMenu handleClick={clickedItem} />
                  </div>
                ) : (
                  <div className="nav__menu__container hide__nav">
                    <NavMenu handleClick={clickedItem} />
                  </div>
                )}
                <div className="content__container ">
                  <Routes>
                    {routes.map((route, index) => {
                      const Page = route.component;
                      return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                  </Routes>
                </div>
              </>
            )
          }
        </Media>
      </Router>
    </div>
  );
}

export default App;
