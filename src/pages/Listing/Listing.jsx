import React, { useEffect, useState } from "react";
import listingImage from "../../assets/Listing.png";
import listingCard from "../../assets/ListingCard.png";
import GoogleLogo from "../../assets/GoogleLogo.png";
import Customer from "../../assets/Customer.png";
import Layout from "../../Layout/Layout";
import styles from "./Listing.module.css";
import axios from "axios";

const Listing = () => {
  const [data, setData] = useState([]);

  const getHouses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/houses`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);


  return (
    <Layout>
      <div>
        <div className={styles.listing}>
          <div className={styles.listingInfo}>
            <h2>
              What’s happening in <br /> San Diego, CA
            </h2>
            <p className={styles.listingInfoParagraph}>
              Over 30,000+ people work for us and more than 70 total countries
              all over the world, 1,850 homes for sale 2 open house 3,700 home
              recently sold 150 price reduceed 2 for elsoures.
            </p>
            <div className={styles.listingInfoDescription}>
              <div>
                <p>{data.length}</p>
                <span>HOMES FOR SALE NOW</span>
              </div>
              <hr />
              <div>
                <p>3,700</p>
                <span>RECENTLY SOLD</span>
              </div>
              <hr />
              <div>
                <p>12</p>
                <span>YEARS EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className={styles.listingCardImageBlock}>
            <img
              src={GoogleLogo}
              alt="GoogleLogo"
              className={styles.listingCardGoogle}
            />
            <img
              src={listingImage}
              alt="listingImage"
              className={styles.listingCardIamge}
            />
            <img
              src={listingCard}
              alt="listingCard"
              className={styles.listingCardMini}
            />
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.customer}>
            <img src={Customer} alt="Customer" />
          </div>
          <div className={styles.customerReview}>
            <h3>CLIENT TESTIMONIALS</h3>
            <div className={styles.CustomerInfo}>
              <h2>See what says our customer</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className={styles.customerReviewAutor}>
              <p> Jon Smith</p>
              <span>Customer</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
