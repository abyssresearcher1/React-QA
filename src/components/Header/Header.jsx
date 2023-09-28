import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className={styles.nav__links}>
              Home
            </Link>
            <a href="#" className={styles.nav__links}>
              Listing
            </a>
            <Link to="propertys" className={styles.nav__links}>
              Property
            </Link>
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
