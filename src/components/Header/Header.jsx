import logo from '../../logo.svg';
import styles from './Header.module.css';
import React from 'react';

function Header() {
  return (
    <header className={styles.appheader}>
      <img src={logo} className={styles.applogo} alt="logo" />
      <h1 className={styles.headertext}>React JS</h1>
    </header>
  );
}

export default Header;
