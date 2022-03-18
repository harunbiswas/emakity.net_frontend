import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopAll({ store }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(store);
  }, [store]);
  return (
    <>
      <div className="product-wrapper">
        <div className="product">
          <img
            src={data.media && data.media[2] && data.media[2].url}
            alt={data.name}
            className="shop-all-img"
          />
          <Link to={`/store/${data.id}`} className="btn btn-theme">
            Shop all{" "}
          </Link>
          <h2 className="product-title">
            {data.products && data.products.length} Products Available
          </h2>
          <Link to="/">
            <span className="product-available-today">Available Today</span>
          </Link>
        </div>
      </div>
    </>
  );
}
