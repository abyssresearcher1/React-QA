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
            <Link to="/listing" className={styles.nav__links}>
              Listing
            </Link>
            <Link to="/propertys" className={styles.nav__links}>
              Property
            </Link>
            <Link to="/subscribe" className={styles.nav__links}>
              subscribe
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
