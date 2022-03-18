import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../../src/assets/images/product/featured-logo.png";
import img1 from "../../../src/assets/images/product/product-full-bg.png";
import Review from "../Review/Review";

export default function ProductFull({ data }) {
  const [productData, setProductData] = useState({
    img1: "",
    title: "",
    num: "",
    location: "",
  });

  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    if (!isFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    setProductData(data);
  });

  return (
    <div className="product-full">
      <div className="product-full-header">
        <img
          src={
            (productData.media &&
              productData.media[1] &&
              productData.media[1].url) ||
            img1
          }
          alt="Product full"
        />
        <div className="product-full-header-details">
          <div className="product-full-header-details-logo">
            <Link to={`/store/${data.id}`}>
              <img
                src={
                  (productData.media &&
                    productData.media[2] &&
                    productData.media[2].url) ||
                  img
                }
                alt="logo"
              />
            </Link>
          </div>
          <Link to={`/store/${data.id}`} className="link">
            <h2 className="product-full-header-details-title">
              {productData.name}
            </h2>
          </Link>
          <span className="product-full-header-details-num">
            {productData.phone}
          </span>
          <span className="product-full-header-details-location">
            {productData.address}
          </span>
        </div>
      </div>
      <div className="product-full-body">
        <div className="product-full-body-top">
          <span className="btn btn-grd product-full-body-top-btn">5.0/s</span>
          <span className="product-full-body-top-text">1 on yelp</span>
        </div>
        <span className="product-full-body-details">Order min: </span>
        <span className="product-full-body-details">Local Delivery:</span>
        <div className="product-full-body-delevery">
          <strong>Delivry Today</strong>
          <strong>Pickup Today</strong>
        </div>
        <Review num={productData.rate || 5} />
        <button
          onClick={favoriteHandler}
          className="btn btn-grd product-full-favorite-btn"
        >
          {(isFavorite && <AiFillHeart color="#e02d22" />) || (
            <AiOutlineHeart color="#000000" />
          )}
        </button>

        <Link to={`/store/${data.id}`} className="product-full-btn btn btn-grd">
          Shop all {productData.products && productData.products.length} Items
        </Link>
      </div>
    </div>
  );
}
