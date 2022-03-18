import { useState } from "react";
import Slider from "react-slick";

export default function BanerSlider() {
  const [data, setData] = useState([
    {
      title1: "Shop Fresh Fruits and Vegetables Today",
      text: "Here is your company slogan and other activities",
    },
    {
      title1: "Shop Fresh Fruits ",
      text: "Here is your company slogan and other activities",
    },
    {
      title1: "Fruits and Vegetables Today",
      text: "Here is your company slogan and other activities",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoPlay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="baner-slider">
      <div className="container">
        <Slider {...settings}>
          {data.map((data, id) => (
            <div key={id} className="baner-slider-item">
              <h2 className="baner-slider-item-title">{data.title1}</h2>
              <p className="baner-slider-item-text">{data.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
