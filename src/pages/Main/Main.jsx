import React from "react";
import styles from "./Main.module.css";
import mainImage from "../../assets/MainHouseImage.png";
import Layout from "../../Layout/Layout";

const Main = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className="main__general">
            <div className={styles.header__title}>
              <h1>
                Easy way to find a home <br /> that’s perfect for you
              </h1>
              <p>
                The find and most trusted marketplace of design & build house in
                the world.
              </p>
            </div>
            <div className={styles.HomeSearch}>
              <div className={styles.HomeSearchNav}>
                <h3>Rent</h3>
                <h3>Buy</h3>
                <h3>Sell</h3>
              </div>
              <hr className={styles.HomeSearchLine} />
              <div className={styles.HomeSearchAny}>
                <p className={styles.desciption}>Los Angeles</p>
                <hr />
                <p className={styles.desciption}>Delux</p>
                <hr />
                <p className={styles.desciption}>$7000-8000</p>
                <button className={styles.Search}>Search</button>
              </div>
            </div>
            <div className={styles.mainImage}>
              <img src={mainImage} alt="main__house-image" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
