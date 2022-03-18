import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
import BottomHeader from "../components/header/BottomHeader";
import Separator from "../components/separator/Separator";
import Title from "../components/title/Title";
import Baner from "../section/baner/Baner";
import Catagori from "../section/catagori/Catagori";
import FeaturedProduct from "../section/Product/FeaturedProduct";

export default function Home() {
  const [catagori, setCatagori] = useState([]);
  const [featurdMarkets, setFeaturdMarkets] = useState([]);
  const context = useContext(ThemeContext);

  useEffect(() => {
    if (context && context.data.categories) {
      setCatagori(context.data.categories);
    }
    if (context && context.data.featured_markets) {
      setFeaturdMarkets(context.data.featured_markets);
    }
  }, [context]);

  return (
    <div id="home">
      <BottomHeader />
      <Baner />
      <Catagori
        allCatagori={context.allCatagori}
        catagori={catagori}
        handler={context.handler}
        catId={context.category}
      />
      <div className="home-product-wrapper">
        <Title name="Find Our Featured & Top Markets" />
        {featurdMarkets.map((data, i) => (
          <div key={i}>
            <FeaturedProduct catId={context.category} data={data} />
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}
