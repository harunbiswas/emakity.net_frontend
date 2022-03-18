import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/product/product-1.png";
import img2 from "../../assets/images/product/product-2.png";
import img3 from "../../assets/images/product/product-3.png";
import img4 from "../../assets/images/product/product-4.png";
import Values from "../../Values";
import { ThemeContext } from "../context/ThemeContext";
import Review from "../Review/Review";

export default function ProductModal() {
  const [imgs, setImgs] = useState([img1, img2, img3, img4]);
  const [data, setData] = useState({});
  const [produtGTY, setProductGTY] = useState(1);
  const prams = useParams();
  const context = useContext(ThemeContext);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 0,
  };

  const incrimentHandler = () => {
    if (produtGTY < data.in_stock) {
      setProductGTY(produtGTY + 1);
    }
  };
  const decrimentHandler = () => {
    if (produtGTY > 0) {
      setProductGTY(produtGTY - 1);
    }
  };
  const closeHandler = () => {
    history.back();
  };

  const url = `${Values.BASE_URL}product/${prams.id}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(url, {
        headers: {
          "Api-Access-Token":
            "743b1e57df96fc47abd528c7f2b34242edd81c23dbe252928954b8ddc169ca27",
          "Content-Type": "application/json",
        },
      })
      .then((d) => {
        setData(d.data.data.product);
      })
      .catch((e) => {
        console.log(e.response);
      });
  });

  return (
    <div className="product-modal-wrapper">
      <button onClick={closeHandler} className="btn product-modal-close-btn">
        X
      </button>
      <div className="container">
        <div className="product-modal">
          <div className="product-modal-img">
            <Slider {...settings}>
              {data.media &&
                data.media.map((img, i) => (
                  <img key={i} src={img.url} alt="" />
                ))}
            </Slider>
          </div>
          <div className="product-modal-body">
            <div className="review-wrapper">
              <Review num={5} />
              <div className="review-count">124 Reviews</div>
            </div>
            <h2 className="product-modal-title">{data.name}</h2>

            <div className="product-modal-description">
              <strong>Description:</strong>
              {data.description}
            </div>

            <div className="product-modal-quantity">
              <p className="product-modal-quantity-size">{`${data.package_items_count} ${data.unit}`}</p>
              <p className="product-modal-quantity-price">
                {!data.discount_price && (
                  <strong className="product-price">
                    {context.carency} {data.price}
                  </strong>
                )}
                {data.discount_price && (
                  <strong className="product-price">
                    <del>
                      {context.carency} {data.price}
                    </del>{" "}
                    / {context.carency} {data.discount_price}
                  </strong>
                )}
              </p>
              <p className="product-modal-quantity-count">
                {produtGTY} of {data.in_stock}
              </p>
            </div>
            <div className="product-modal-buying-option">
              <div className="product-modal-buying-option-group">
                <input type="radio" name="buying" id="buying1" />
                <label htmlFor="buying1">
                  <p>meduam box</p> <span>$2.8</span>
                </label>
              </div>
              <div className="product-modal-buying-option-group">
                <input type="radio" name="buying" id="buying2" />
                <label htmlFor="buying2" id="buyingl1">
                  <p>lagre box</p> <span>$3.8</span>
                </label>
              </div>
            </div>

            <div className="product-modal-btn-wrapper">
              <div className="product-modal-counter">
                GTY:
                <span onClick={decrimentHandler}>-</span>
                {produtGTY}
                <span onClick={incrimentHandler}>+</span>
              </div>
              <button className="btn btn-theme product-modal-btn">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
