import { useState } from "react";
import cards from "../assets/images/cards.png";
import card from "../assets/images/paypal.png";
import CardItem from "../components/card/CardItem";
import Manazment from "../components/card/Manazment";

export default function Card() {
  const [isPuckUp, setISPuckUp] = useState(true);

  const deleveryHandler = () => {
    setISPuckUp(false);
  };
  const pickUpHandler = () => {
    setISPuckUp(true);
  };
  return (
    <section id="card" className="card">
      <div className="container">
        <div className="card-header">
          <div className="card-header-btn-wrapper">
            <button
              onClick={pickUpHandler}
              style={{ backgroundColor: isPuckUp && "#000" }}
              className="btn btn-theme card-header-btn"
            >
              Store PICKUP
            </button>{" "}
            or
            <button
              onClick={deleveryHandler}
              style={{ backgroundColor: !isPuckUp && "#000" }}
              className="btn btn-theme card-header-btn"
            >
              DELIVERY
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-header">
            <div className="card-body-header-left">
              <p>Items Availability and Shipping Details</p>
            </div>
            <div className="card-body-header-right">
              <p>Items Price</p>
              <p>Qty</p>
              <p>Total</p>
            </div>
          </div>
          {(isPuckUp && (
            <div className="card-body-item-wrapper">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          )) || (
            <div className="card-body-item-wrapper">
              <CardItem />
              <CardItem />
              <Manazment />
            </div>
          )}

          <div className="card-main-btn-wrapper">
            <button className="btn">
              <img src={cards} alt="" />
            </button>
            <button className="btn">
              <img src={card} alt="" />
            </button>
            <button className="btn btn-theme">Cash on Delivery</button>
          </div>
          <div className="manazment-right-header-wrapper">
            <h4 className="manazment-right-header-title">
              By continuing to Checkout, you are agreeing to our
            </h4>
            <a href="/">Terms of Use</a> & <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
