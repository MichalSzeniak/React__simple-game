import React, { useState } from 'react';
import Hamburger from './Hamburger';
import '../styles/Navigation.scss';

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="navigation">
        <Hamburger click={handleCLick} handleClass={click} />

          <nav className={click ? 'nav nav__active' : 'nav'}>
            <ul className="nav__list">
              <li className="nav__list--item">
                <a className="nav__link" href="">
                  Start
                </a>
              </li>
              <li className="nav__list--item">
                <a className="nav__link" href="">
                  Achievements
                </a>
              </li>
              <li className="nav__list--item">
                <a className="nav__link" href="">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </>
  );
};

export default Navigation;
