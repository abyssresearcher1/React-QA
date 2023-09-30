import React from "react";
import benefitsImage from "../../assets/BenefitsImage.png";
import protection from "../../assets/Protection.svg";
import house from "../../assets/House.svg";
import transparancy from "../../assets/Transparancy.svg"
import Layout from "../../Layout/Layout";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <Layout>
      <div className={styles.subscribe}>
        <div className={styles.container}>
          <div className={styles.subscribeGeneral}>
            <div className={styles.subscribeInfo}>
              <h2>Ready to find your next home?</h2>
              <p>
                It is a long established fact that a reader will be distracted{" "}
                <br />
                by the readable content of a page when looking at its layout.{" "}
                <br />
                The point of using Lorem Ipsum
              </p>
            </div>
            <div className={styles.enterEmail}>
              <input type="email" placeholder="enter your email" />
              <button className={styles.enterEmailBtn}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        <div className={styles.benefitsImage}>
          <img
            src={benefitsImage}
            alt="benefitsHouseImage"
            className={styles.benefitsHouseImage}
          />
        </div>
        <div className={styles.benefitsInfo}>
          <h2>
            See some benefit from <br /> our properties
          </h2>
          <div className={styles.benefitsList}>
            <h3>
              <img
                src={protection}
                alt="protection"
                className={styles.benefitsProtectionImage}
              />
              100& protection
            </h3>
            <p>All secure protection for your future house</p>
          </div>
          <div className={styles.benefitsList}>
            <h3>
              <img
                src={house}
                alt="House"
                className={styles.benefitsTierHouse}
              />{" "}
              Top Tier House
            </h3>
            <p>We just provide top tier house for you</p>
          </div>
          <div className={styles.benefitsList}>
            <h3>
              {" "}
              <img src={transparancy} className={styles.benefitsTransparancy} alt="Transparancy" /> Transparancy
            </h3>
            <p>Transparancy is always for customers</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribe;
