import React from "react";
import footerLogo from "../../assets/Logo.svg";
import footerFacebook from "../../assets/footer__facebook.svg";
import footerInstagramm from "../../assets/footerInstagramm.svg";
import footerLinkedIn from "../../assets/footerLinkedIn.svg";
import footerTwitter from "../../assets/footerTwitter.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGeneral}>
          <div className={styles.footerLogo}>
            <img src={footerLogo} alt="footer__logo" />
            <p>
              Lorem Ipsum is simply dummy <br /> text of the printing and
              typesetting <br />
              industry.
            </p>
          </div>
          <div className={styles.footerContacts}>
            <div className={styles.products}>
              <span>Product</span>
              <Link to="/" href="#">
                Home
              </Link>
              <Link to="/propertys" href="#">
                Property
              </Link>
              <Link to="/listing" href="#">
                Listing
              </Link>
              <Link to="/subscribe" href="#">
                Subscribe
              </Link>
            </div>
            <div className={styles.company}>
              <span>Company</span>
              <a href="#">Patnerships</a>
              <a href="#">Terms of use</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>
            </div>
            <div className={styles.findHome}>
              <span>Get in touch</span>
              <p>
                You’ll find your next home, in <br /> any style you prefer.
              </p>
              <div className={styles.footericons}>
                <img src={footerFacebook} alt="" />
                <img src={footerInstagramm} alt="" />
                <img src={footerLinkedIn} alt="" />
                <img src={footerTwitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
