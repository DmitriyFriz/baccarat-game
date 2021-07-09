import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const switchVisible = () => setMobileMenuVisible(!mobileMenuVisible);
  const hideMobileMenu = () => setMobileMenuVisible(false);

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link to="/" onClick={hideMobileMenu}>
          <Logo className={style.logo} />
        </Link>
        <button type="button" className={style.menuIcon} onClick={switchVisible}>
          {!mobileMenuVisible && <FontAwesomeIcon icon={faBars} />}
          {mobileMenuVisible && <FontAwesomeIcon icon={faTimes} className={style.closeIcon} />}
        </button>
        <ul className={mobileMenuVisible ? `${style.menu} ${style.active}` : style.menu}>
          <li className={style.menuItem}>
            <Link to="/" onClick={hideMobileMenu}>
              Game
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link to="/statistics" onClick={hideMobileMenu}>
              Statistics
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
