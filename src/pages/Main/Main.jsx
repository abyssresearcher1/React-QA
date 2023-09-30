import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import mainImage from "../../assets/MainHouseImage.png";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);

  const getHouses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/houses`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

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
                <button className={styles.HomeSearchRentBtn}>Rent</button>
                <button className={styles.HomeSearchBuyBtn}>Buy</button>
                <button className={styles.HomeSearchSellBtn}>Sell</button>
              </div>
              <hr className={styles.HomeSearchLine} />
              <div className={styles.HomeSearchAny}>
                <p className={styles.description}>Los Angeles</p>
                <hr />
                <p className={styles.description}>Delux</p>
                <hr />
                <p className={styles.description}>$7000-8000</p>
                <Link to="/propertys" className={styles.Search} >Search</Link>
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
