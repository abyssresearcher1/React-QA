import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./Propertys.css";

const Propertys = () => {
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

  const [house, setHouse] = useState("");

  const filteredHouses = data.filter((houseItem) => {
    return houseItem.name.toLowerCase().includes(house.toLowerCase());
  });

  return (
    <Layout>
      <div className="search__block">
        <button className="SearchBtn">Search</button>
        <input
          type="text"
          onChange={(event) => {
            setHouse(event.target.value);
          }}
          className="search__input"
        />
      </div>
      {filteredHouses.map((item) => {
        return (
          <div className="CardSection">
            <div className="Card">
              <div className="Card__image">
                <img src={item.img} alt="Card__image" className="Card__image" />
              </div>
              <div className="Card__info">
                <span> {item.name}</span>
                <p className="Card__location"> {item.location}</p>
                <h2> $ {item.cost}</h2>
                <p className="Card__rooms"> {item.rooms}</p>
                <Link
                  to={`/homeDetails/${item.id}`}
                  className="Card__detailsBtn"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Propertys;
