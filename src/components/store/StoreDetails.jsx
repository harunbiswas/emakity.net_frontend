import { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { GiHomeGarage } from "react-icons/gi";
import { GrStar } from "react-icons/gr";
import logo from "../../assets/images/store/logo.png";
import storelogo from "../../assets/images/store/srote.png";

export default function StoreDetails({ storeData }) {
  const [data, setData] = useState({
    name: "Family Saving Grocery",
    storeLogo: storelogo,
    addrase: "425 Business Street, Bronx, NY 10457",
    phone: "(917) 456-2211",
  });
  const [rate, setRate] = useState([]);

  if (storeData.rate) {
    for (let i = 1; i <= storeData.rate; i++) {
      if (rate.length < 5) {
        rate.push("1");
      }
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      if (rate.length < 5) {
        rate.push("1");
      }
    }
  }

  return (
    <div className="store-details">
      <div className="container">
        <div className="store-details-wrapper">
          <div className="store-details-item-wrapper">
            <div className="store-details-brand">
              <img className="store-details-brand-logo" src={logo} alt="" />
              <img
                className="store-details-brand-store"
                src={storeData && storeData.media[1] && storeData.media[1].url}
                alt=""
              />
            </div>
            <div className="store-details-item">
              <div className="store-details-item-title">
                <h2>{storeData.name}</h2>
              </div>
              <span className="store-details-item-addrase">
                <strong>Store Address: </strong> {storeData.address}
              </span>
              <span className="store-details-item-phone">
                <strong>Phone: </strong> {storeData.phone}
              </span>
              <div className="review">
                {rate.map((data, i) => (
                  <GrStar key={i} color="#438600" />
                ))}
              </div>
            </div>
          </div>
          <div className="store-details-delevary">
            <div className="store-details-delevary-btn-wrapper">
              <GiHomeGarage />
              <button className="btn btn-theme store-details-delevary-btn">
                Open for PICKUP
              </button>
            </div>
            <div className="store-details-delevary-btn-wrapper">
              <AiFillCar />
              <button className="btn btn-theme store-details-delevary-btn">
                Delivery Available
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
