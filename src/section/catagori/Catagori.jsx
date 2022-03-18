import { useEffect, useState } from "react";
import Slider from "react-slick";
import Cat from "../../components/catagori/Cat";
import Title from "../../components/title/Title";

export default function Catagori({ catId, catagori, handler, allCatagori }) {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    setCatData(catagori);
  }, [catagori]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="catagori">
      <div className="container">
        <div className="catagori-header">
          <Title name="Choose among our List of Product Categories" />
          <button onClick={allCatagori} className="btn btn-theme">
            See All Categorys
          </button>
        </div>
        <Slider {...settings}>
          {catData.map((data, i) => (
            <Cat catId={catId} key={i} data={data} handler={handler} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
