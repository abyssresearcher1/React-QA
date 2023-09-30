import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../../Layout/Layout";
import styles from "./HomeDetails.module.css";

const HomeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getHouses = async () => {
    try {
      const houses = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/houses/${id}`
      );
      setData(houses.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <Layout>
      <div className={styles.HomeDetails}>
        <div className={styles.container}>
          <div className={styles.homeDetailsGeneral}>
            <img src={data.img} alt="HomeImage" className={styles.HomeDetailsImage} />
            <div className={styles.homeDetailsInfo}>
              <div className={styles.homeDetailsName}>{data.name}</div>
              <div>
                <h2>COST: ${data.cost}</h2>
              </div>
              <div>
                <h2>ROOMS: {data.rooms}</h2>
              </div>
              <div className={styles.HomeDetailsDescription}>
                <p>
                  The Luxury Lakeside Villa is a stunning retreat situated on
                  the shores of a clear, serene lake, surrounded by picturesque
                  mountains and forests. This architectural gem seamlessly
                  combines modern luxury with the beauty of nature, offering
                  spacious living areas, top-notch amenities, and a private dock
                  for outdoor activities. It's the perfect destination for
                  relaxation and enjoying the great outdoors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeDetails;
