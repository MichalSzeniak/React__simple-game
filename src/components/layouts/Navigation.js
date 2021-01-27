import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

const list = [
  { name: 'Start', path: '/', ecaxt: true },
  { name: 'Achievements', path: '/Achievements' },
  { name: 'Settings', path: '/Settings' },
];

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
  };

  const handleLink = () => {
    setClick(!click);
  }

  const menu = list.map((item) => (
    <li className="nav__list--item">
      <NavLink className="nav__link" to={item.path} onClick={handleLink} exact={item.ecaxt ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <div className="navigation">
        <Hamburger click={handleCLick} handleClass={click} />

        <nav className={click ? 'nav nav__active' : 'nav'}>
          <ul className="nav__list">{menu}</ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
