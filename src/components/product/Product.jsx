import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Product({ product }) {
  const [data, setData] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const context = useContext(ThemeContext);

  useEffect(() => {
    setData(product);
  }, [product]);

  const favoriteHandler = () => {
    if (!isFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  return (
    <>
      <div className="product-wrapper">
        <div className="product">
          <Link to={`/product/${data.id}`}>
            <img
              src={data.media && data.media[1] && data.media[1].url}
              alt={data.name}
            />
          </Link>
          <Link to={`/product/${data.id}`}>
            <h2 className="product-title">{data.name}</h2>
          </Link>
          <span className="product-quantity">
            {data.package_items_count &&
              `${data.package_items_count} ${data.unit}`}
          </span>
          <div className="product-price">
            {!data.discount_price && (
              <strong className="product-price">{`${context.carency} ${data.price}`}</strong>
            )}
            {data.discount_price && (
              <strong className="product-price">
                <del>{`${context.carency} ${data.price}`}</del> /{" "}
                {`${context.carency} ${data.discount_price}`}
              </strong>
            )}
            <button className="btn btn-grd product-add-card-btn">
              Add to Cart
            </button>
            <div className="product-plus">
              <button className="btn btn-grd product-plus-btn">+</button>
            </div>
            <button
              onClick={favoriteHandler}
              className="btn btn-grd product-favorite-btn"
            >
              {(isFavorite && <AiFillHeart color="#e02d22" />) || (
                <AiOutlineHeart color="#000000" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
