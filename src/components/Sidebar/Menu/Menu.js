import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
    <a className={styles['menu__list-item-link']}
      activeClassName={styles['menu__list-item-link--active']} href="https://blog.stanmd.tk/me" target="_blank">About me</a>
    <br></br>
    <a className={styles['menu__list-item-link']}
      activeClassName={styles['menu__list-item-link--active']} href="https://code.stanmd.tk" target="_blank">Open Source</a>
  </nav>
);

export default Menu;
