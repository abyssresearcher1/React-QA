import React from "react";
import logo from "../../assets/Logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__general}>
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className={styles.nav}>
            <a href="#" className={styles.nav__links}>
              Home
            </a>
            <a href="#" className={styles.nav__links}>
              Listing
            </a>
            <a href="#" className={styles.nav__links}>
              Property
            </a>
            <a href="#" className={styles.nav__links}>
              Agents
            </a>
            <a href="#" className={styles.nav__links}>
              Blog
            </a>
            <div className={styles.SignIn}>
              <p>Sign in</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
