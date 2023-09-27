import React from "react";
import styles from "./Main.module.css";
import mainImage from "../../assets/MainHouseImage.png";

const Main = () => {
  return (
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
            <div className={styles.HomeSearchAny}>
                <p className="location">Los Angeles</p>
                <p className="type">Delux</p>
                <p className="price">$7000-8000</p>
            </div>
            <button>Search</button>
          </div>
          <div className={styles.mainImage}>
            <img src={mainImage} alt="main__house-image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
