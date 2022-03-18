import { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../../components/product/Product";
import ProductFull from "../../components/product/ProductFull";
import ShopAll from "../../components/product/ShopAll";
import SubTitle from "../../components/title/SubTitle";

export default function FeaturedProduct({ data, catId }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (data.products && !catId) {
      setProduct(data.products);
    } else if (data.products && catId) {
      const products = [];
      data.products.forEach((d) => {
        if (catId == d.category_id) {
          products.push(d);
        }
      });
      setProduct(products);
    }
  }, [catId]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="featured-product">
      <div className="container">
        <SubTitle name="Check the best selling products at Shop Fair Inc." />
        <div className="featured-product-item-wrapper">
          <ProductFull data={data} />
          <div className="featured-product-item">
            <Slider {...settings}>
              {product.map((data, i) => (
                <Product key={i} product={data} />
              ))}
              <ShopAll store={data} />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
