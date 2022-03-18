import { useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/product/product-1.png";
import img2 from "../../assets/images/product/product-2.png";
import img3 from "../../assets/images/product/product-3.png";
import img4 from "../../assets/images/product/product-4.png";
import img5 from "../../assets/images/product/product-5.png";
import Product from "../../components/product/Product";
import Title from "../../components/title/Title";

export default function WeekProduct() {
  const [product, setProcut] = useState([
    {
      title: "Pumpkin",
      img: img1,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img2,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img3,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img4,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img5,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img4,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "",
    },

    {
      title: "Pumpkin",
      img: img1,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img5,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "$21.32",
    },
    {
      title: "Pumpkin",
      img: img1,
      alt: "",
      quantity: "1 kilogram",
      price: "$30.00",
      sPrice: "",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    margin: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
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
    <section id="week-product">
      <div className="container">
        <div className="week-product-title-wrapper">
          <Title name="Trending Items This Week Products" />
          <a href="/" className="btn btn-grd week-product-btn">
            See All Categories
          </a>
        </div>
        <div className="week-product-item-wrapper">
          <Slider {...settings}>
            {product.map((data, i) => (
              <Product key={i} product={data} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
